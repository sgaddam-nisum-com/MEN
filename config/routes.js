/** 
 * Routes
 * Module dependencies.
 */
var index = require('../app/controllers/index');

exports.init = function(app, passport, auth) {
    console.log('Initializing Routes');

    app.all('/auth/*', auth.requiresLogin);

    // Routes    
    app.get('/login', index.signin);
    app.get('/signout', index.signout);
    app.get('/register', index.register);
    app.get('/userbyname', index.getUserByName);

    app.get('/other', auth.user.hasAuthorization, index.other);
    app.get('/auth/success', function(req, res) {
        index.home(req, res);
    });

    // Setting the local strategy route
    //LOGIN SERVICE
    app.post('/signin',
        passport.authenticate('local', {
            successRedirect: '/auth/success',
            failureRedirect: '/login',
            failureFlash: true
        }));
};
