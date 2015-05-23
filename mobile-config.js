App.info({
    id          : "com.particle4dev.todoapp",
    name        : 'Todo App',
    description : '',
    author      : 'Particles4dev Team',
    email       : 'particle4dev01@gmail.com',
    website     : '',
    version     : '0.1.0'
});

App.accessRule('*');

// Pass preferences for a particular PhoneGap/Cordova plugin
App.configurePlugin('com.phonegap.plugins.facebookconnect', {
    APP_ID: '801792429874827',
    APP_NAME: 'todos-react'
});

App.setPreference("SplashScreen", "screen");
App.setPreference("SplashScreenDelay", "7000");
