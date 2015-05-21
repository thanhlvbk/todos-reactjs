/**
 * Set up router
 */
FlowRouter.route('/', {
    action: function(params) {
        FlowLayout.render('applicationLayout', { top: "header", main: "loginPage" });
    },
    name: 'main'
});

FlowRouter.route('/list-todo', {
    subscriptions: function(params, queryParams) {
        this.register('myTasks', Meteor.subscribe('loadTasks'));
        // Tracker.autorun(function() {
        //     console.log("Is myTasks ready?:", FlowRouter.subsReady("myTasks"));
        // })
    },
    action: function(params) {
        FlowLayout.render('applicationLayout2', { top: "header", main: "listTodoPage" });
    },
    name: 'listTodo'
});