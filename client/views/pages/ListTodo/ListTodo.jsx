var ListTodo = ReactMeteor.createClass({
    templateName: "listTodoPage",
    getMeteorState: function() {
        return {
            tasks: ListTasksCollection.find({}, {sort: {updatedAt: -1}}).fetch()
        }
    },
    renderTask: function(model) {
        return <ListTask 
            key={model._id}
            model={model}
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
    handleChange: function(idTask) {        
        this.setState({idTask: idTask,isChecked: !this.state.isChecked});
        $('#'+this.props.idTask).toggleClass('checked');
    },
    render: function() {
        if(this.state == null)
            this.state={ idTask: null ,isChecked: false }
        console.log(this.state.idTask , this.state.isChecked);
        return (
            <div className="item row" style={{padding: '16px'}}>
                <div className="col col-20 item-checkbox" >
                    <label className="checkbox" style={{right: 'auto'}}  >
                        <input type="checkbox" checked={this.state.isChecked} onChange={this.handleChange.bind(this, this.props.idTask)}/>
                    </label>
                </div>
                <div id={this.props.idTask} className="col col-67" style={{whiteSpace: 'normal'}}>{this.props.task}</div>
                <div className="col" style={{textAlign: 'center'}}>
                    <i className="icon ion-close" onClick={this.handleCloseTask}></i>
                </div>
            </div>
            
        );
    },
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