var ListTodo = ReactMeteor.createClass({
    templateName: "listTodoPage",
    getMeteorState: function() {
        return {tasks: ListTasksCollection.find({}, {sort: {updatedAt: -1}}).fetch()}
    },
    renderTask: function(model) {
        return <ListTask 
            key={model._id}
            idTask = {model._id} 
            task={model.task}/>;
    },
    handleKeyPress: function(evt) {
        if(evt.charCode == 13){
            evt.preventDefault();
            var self = this;
            var task = React.findDOMNode(this.refs.task).value.trim();
            if(!task) {
                return;
            }
            Meteor.call('insertNewTask', {task: task, timeTask: new Date()}, function(err, res){
                if(err){
                    console.log(err)
                }
                else{
                    console.log(res)
                    React.findDOMNode(self.refs.task).value = '';
                }
            });            
            return;
        }        
    },    
    render: function() {
        return (
            <div className="content has-header" style={{top: '80px', marginBottom: '81px'}}>
                <div className="list list-insert">
                    <label className="item item-input">
                        <input type="text" placeholder="Type to add new tasks" ref="task" onKeyPress={this.handleKeyPress}/>
                    </label>
                </div>
                <div className="list">
                    { this.state.tasks.map(this.renderTask) }
                </div>
            </div>
        );
    }
});

var ListTask = ReactMeteor.createClass({
    handleCloseTask: function(evt) {
        evt.preventDefault();
        Meteor.call('removeTask', this.props.idTask, function(err, res){
            if(err){
                console.log(err)
            }
            else {
                console.log(res)
            }
        });
    },
    handleInput: function(evt) {
        evt.preventDefault();
        // var task = ListTasksCollection.findOne(this.props.idTask);
        // if(task){
        //     var status = task.status;
        //     if(status == 'active'){
        //         $(evt.target).addClass('checked');
        //         console.log(task._id);
        //     }
        //     if(status == 'completed') {
        //         $(evt.target).css('background-color', 'red');
        //         console.log(task._id);
        //     }
        // }
        $(evt.target).toggleClass('checked');
    },
    render: function() {
        return (
            <div className="item row" style={{padding: '16px'}}>
                <div className="col col-20 item-checkbox" >
                    <label className="checkbox" style={{right: 'auto'}}  >
                        <input type="checkbox" onChange={this.handleInput}/>
                    </label>
                </div>
                <div className="col col-67" style={{whiteSpace: 'normal'}}>{this.props.task}</div>
                <div className="col" style={{textAlign: 'center'}}>
                    <i className="icon ion-close" onClick={this.handleCloseTask}></i>
                </div>
            </div>
            
        );
    }
});
/**
 * HELPERS
 */

/**
 * EVENTS
 */

/**
 * CLASS FUNCTION
 */