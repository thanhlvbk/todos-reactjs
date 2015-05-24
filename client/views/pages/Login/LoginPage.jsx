var Dialog = MaterialReact.Dialog;
var FlatButton = MaterialReact.FlatButton;
var FontIcon = MaterialReact.FontIcon;
var RaisedButton = MaterialReact.RaisedButton;
var FloatingActionButton = MaterialReact.FloatingActionButton;
var DatePicker = MaterialReact.DatePicker;
var Slider = MaterialReact.Slider;

var Checkbox = MaterialReact.Checkbox;
var RadioButtonGroup = MaterialReact.RadioButtonGroup;
var RadioButton = MaterialReact.RadioButton;
var Toggle = MaterialReact.Toggle;

var LeftNav = MaterialReact.LeftNav;
var MenuItem = MaterialReact.MenuItem;

var Tabs = MaterialReact.Tabs;
var Tab = MaterialReact.Tab;

var Snackbar = MaterialReact.Snackbar;
var DropDownMenu = MaterialReact.DropDownMenu;

var menuItems = [
   { payload: '1', text: 'Never' },
   { payload: '2', text: 'Every Night' },
   { payload: '3', text: 'Weeknights' },
   { payload: '4', text: 'Weekends' },
   { payload: '5', text: 'Weekly' },
];

//Standard Actions
var standardActions = [
    { text: 'Cancel' },
    { text: 'Submit', onClick: this._onDialogSubmit, ref: 'submit' }
];
var customActions = [
  <FlatButton
    label="Cancel"
    secondary={true}
    onTouchTap={this._handleCustomDialogCancel} />,
  <FlatButton
    label="Submit"
    primary={true}
    onTouchTap={this._handleCustomDialogSubmit} />
];

menuItems = [
  { route: 'get-started', text: 'Get Started' },
  { route: 'css-framework', text: 'CSS Framework' },
  { route: 'components', text: 'Components' },
  { type: MenuItem.Types.SUBHEADER, text: 'Resources' },
  { 
     type: MenuItem.Types.LINK, 
     payload: 'https://github.com/callemall/material-ui', 
     text: 'GitHub' 
  },
  { 
     text: 'Disabled', 
     disabled: true 
  },
  { 
     type: MenuItem.Types.LINK, 
     payload: 'https://www.google.com', 
     text: 'Disabled Link', 
     disabled: true 
  },
];

var Login = ReactMeteor.createClass({
    templateName: "loginPage",
    handleSubmit: function(e) {
        e.preventDefault();
        CFB.login(function (err) {
            if(err)
                console.log(err);
            else
                FlowRouter.go('listTodo');
        });
    },
    //Somewhere in our code
    _handleAction: function() {
        //We can add more code to this function, but for now we'll just include an alert.
        alert("We removed the event from your calendar.");
    },
    render: function() {
        return (
            <div className="content has-header" style={{top: '80px', marginBottom: '81px'}}>
                <div className="card list" style={{margin: '20px 30px', boxShadow:'none'}}>
                    <h2 style={{textAlign: 'center'}}>Create a free account</h2>
                    <p style={{textAlign: 'center'}}>This way you will keep your tasks in your smart phone</p>
                    <button onClick={this.handleSubmit} className="button button-block button-positive login" style={{ marginTop: '30px'}}>
                        Facebook
                    </button>

                    <RaisedButton secondary={true}>
                        <span className="mui-raised-button-label example-image-button">Choose an Image</span>
                    </RaisedButton>
                    <DropDownMenu menuItems={menuItems}>
                        aaaa
                    </DropDownMenu>

                    <Snackbar
                    message="Event added to your calendar"
                    action="undo"
                    onActionTouchTap={this._handleAction}/>


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