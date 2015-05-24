var LeftNav = MaterialReact.LeftNav;
var MenuItem = MaterialReact.MenuItem;

var menuItems = [
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
    }
];
var reactLayout = ReactMeteor.createClass({
    templateName: "reactLayout",
    render: function() {
        return (
            <LeftNav docked={true} menuItems={menuItems} />
        );
    }
});