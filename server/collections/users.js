/**
 * Config, variable
 */
var Future = Npm.require('fibers/future');
var Fiber = Npm.require('fibers');

/**
 * Methods
 */
Meteor.methods({

});

/**
 * Function or class
 */

/**
 * insert new user by object (fixtures)
 * 
 * @param           user
 * @return          id
 **/
var insertByObject = function (user) {
    if (Users.findOne({username: user.username}, {fields: {_id:1}})){
        throw new Error(user.username + ' is exists');
    }
    user.updatedAt = new Date();
    // user.createdAt = new Date(); accounts package will auto create this field 
    user.profile.image = SC.AVATAR;
    return Users.insert(user);
};

/**
 * 
 *
 * @param {userId} 
 * @api public
 */

/**
 * export
 */
(function(){
    var self = this;
    self.insertByObject     = insertByObject;
}).apply(APP.namespace('app.collections.USERS'));

/**
 * Quick test
 */
Meteor.startup(function () {

});