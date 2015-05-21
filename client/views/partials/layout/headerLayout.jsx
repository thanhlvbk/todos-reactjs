var Header = ReactMeteor.createClass({
	templateName: "header",
    render: function() {
        return (
        	<div className="bar bar-header header" style={{height: '80px',backgroundColor: '#5E35B1'}}>
            	<div className="row">
		            <div className="col col-50" style={{ marginTop: '10px', color: '#fff'}}>
		                <h3 style={{ color: '#fff'}}>Todo App</h3>
		            </div>
		            <div className="col" style={{ marginTop: '10px'}}>
		                {logoutButton}
		                {userName}
		                {avatar}
		            </div>
		        </div>
        	</div>
        );
    }
});

var LogoutButton = ReactMeteor.createClass({
    render: function() {
        return (
            <i className="icon ion-android-more-vertical" style={{
                float: 'right',
                marginTop: '5px',
                fontSize: '30px',
                color: '#fff',
            }}></i>
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

var logoutButton;
var userName;
var avatar;
if(Meteor.userId()){
    logoutButton = <LogoutButton />;
    userName = <UserName />;
    avatar = <Avatar />
}
