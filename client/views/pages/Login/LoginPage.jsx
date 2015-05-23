var Login = ReactMeteor.createClass({
    templateName: "loginPage",
    handleSubmit: function(e) {
        e.preventDefault();
        Meteor.loginWithPassword('123456', 'Nov2013', function(err){
            if(err)
                console.log(err);
            else
                FlowRouter.go('listTodo');
        });
    },
    render: function() {
        return (
            <div className="content has-header" style={{top: '80px', marginBottom: '81px'}}>
                <div className="card list" style={{margin: '20px 30px', boxShadow:'none'}}>
                    <h2 style={{textAlign: 'center'}}>Create a free account</h2>
                    <p style={{textAlign: 'center'}}>This way you will keep your tasks in your smart phone</p>
                    <button onClick={this.handleSubmit} className="button button-block button-positive login" style={{ marginTop: '30px'}}>
                        Face Book
                    </button>
                    <div className="term" style={{textAlign: 'center'}}>
                        <p>By creating an account you agree to our Terms of Use and Privacy</p>
                        <p style={{fontWeight: 'bold'}}>I AM ALREADY A MEMBER.</p>
                    </div>
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