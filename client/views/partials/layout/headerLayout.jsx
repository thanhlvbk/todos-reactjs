var Header = ReactMeteor.createClass({
	templateName: "header",
    getMeteorState: function() {
        if(Meteor.userId()){
            console.log('Login');
            return {
                logoutButton: <LogoutButton />,
                userName: <UserName />,
                avatar: <Avatar />
            }
        }
        if(Meteor.userId() == null){
            console.log('Logout');
            return {
                logoutButton: undefined,
                userName: undefined,
                avatar: undefined
            }
        }
    },
    render: function() {
        return (
        	<div className="bar bar-header header" style={{height: '80px',backgroundColor: '#5E35B1', padding: '0'}}>
            	<div className="row" style={{padding: '0'}}>
		            <div className="col col-50" style={{ marginTop: '10px', color: '#fff'}}>
		                <h3 style={{color: '#fff', marginTop: '5px', marginBottom: '0'}}>Todo App</h3>
		            </div>
		            <div className="col" style={{ marginTop: '10px'}}>
		                {this.state.logoutButton}
		                {this.state.userName}
		                {this.state.avatar}
		            </div>
		        </div>
        	</div>
        );
    }
});

var LogoutButton = ReactMeteor.createClass({
    handleLogout: function (evt) {
        evt.preventDefault();
        Meteor.logout();
        FlowRouter.go('main');
    },
    render: function() {
        return (
            <i className="icon ion-log-out" style={{
                float: 'right',
                marginTop: '5px',
                fontSize: '30px',
                color: '#fff',
            }} onClick={this.handleLogout}></i>
        )
    }
});
var UserName = ReactMeteor.createClass({
    render: function() {
        return (
            <h4 style={{ float:'right', color: '#fff', marginRight: '20px'}}>Le Thanh</h4>
        )
    }
});
var Avatar = ReactMeteor.createClass({
    render: function() {
        return (
            <img src="images/gold-dragon.jpg" style={{
                maxWidth: '40px',
                maxHeight: '40px',
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                float:'right',
                marginRight: '5px',
            }}/>
        )
    }
});


