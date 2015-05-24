/**
 * Set up router
 */
if(Meteor.isClient) {
    FlowRouter.route('/', {
        action: function(params) {
            FlowLayout.render('applicationLayout', { layout: "reactLayout"});
        },
        name: 'main'
    });

    FlowRouter.route('/list-todo', {
        middlewares: [
            function(path, next) {
                if(Meteor.userId())
                    next();
                else
                    FlowRouter.go('main');
            }
        ],
        subscriptions: function(params, queryParams) {
            this.register('myTasks', Meteor.subscribe('loadTasks'));
            Tracker.autorun(function() {
                console.log("Is myTasks ready?:", FlowRouter.subsReady("myTasks"));
            })
        },
        action: function(params) {
            FlowLayout.render('applicationLayout2', { top: "header", main: "listTodoPage" });
        },
        name: 'listTodo'
    });
}
