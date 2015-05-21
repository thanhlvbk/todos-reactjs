/**
 * ListTasks: danh sach cac task cua nguoi dung
 *
 *  _id     : ObjectId, unique identifier created by system
 *
 *  ==> MANDATORY
 *  task 		: String, Noi dung cua task
 *  status      : String, trang thai cua task
 *  timeTask    : Date, thoi gian tao task
 *  userId      : ObjectId, dai dien cho nguoi tao task
 *  updatedAt   : Date, set to creation date, updated on changes as needed.
 *  createdAt   : Date, set to creation date.
 *
 * ==> OPTIONAL
 *
 * @type {Meteor.Collection}
 */

ListTasksCollection = new Meteor.Collection('listTasks',{
    transform: function(doc) {return new ListTasksDocument(doc);}
});

ListTasksDocument = function(doc){
    var self = this;
    _.extend(self, doc);
};
_.extend(ListTasksDocument.prototype, {
    constructor: ListTasksDocument
});

/**
 * Define the schema
 */

ListTasksCollection.attachSchema(new SimpleSchema ({
    task: {
        type: String,
        label: "task"
    },
    status: {
        type: String,
        label: "status"
    },
    timeTask: {
        type: Date,
        label: "timeTask"
    },
    userId: {
    	type: String,
    	label: "userId",
    },
    createdAt: {
        type: Date,
        label: "createdAt"
    },
    updatedAt: {
        type: Date,
        label: "updatedAt"
    }
}));

ListTasksCollection.deny({
    insert: function(userId, doc){
        return true;
    },
    update: function(userId, doc, fields, modifier){
        return true;
    },
    remove: function(userId, doc){
        return true;
    }
});

/**
 * Methods
 */
Meteor.methods({
	"insertNewTask": function(doc){
        try {
            var self = this;
            if (!self.userId)
                throw new Error("Please log in first");

            doc.userId = self.userId;
            return insertNewTask(doc);
        }
        catch(err){
            if(err.reason)
                throw new Meteor.Error(403, err.reason);
            throw new Meteor.Error(403, err.message);
        }
    },
    "removeTask": function(idTask) {
        try {
            var self = this;
            if (!self.userId)
                throw new Error("Please log in first");
            return removeTask(idTask);
        }
        catch(err){
            if(err.reason)
                throw new Meteor.Error(403, err.reason);
            throw new Meteor.Error(403, err.message);
        }
    }
});

/**
 * Function or class
 */
var insertNewTask = function (doc) {
    doc.status = TASK_STATUS.ACTIVE;
	doc.updatedAt = new Date();
    doc.createdAt = new Date();
    return ListTasksCollection.insert(doc);
};
var removeTask = function(idTask) {
    var task = ListTasksCollection.findOne(idTask);
    if(!task)
        throw new Error("Not found task")
    return ListTasksCollection.remove(idTask);
};
/**
 * export
 */

(function(){
    var self = this;
    self.insertNewTask = insertNewTask;
    self.removeTask = removeTask
}).apply(APP.namespace('todoApp.collections.TODOLIST'));