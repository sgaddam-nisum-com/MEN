var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy;

var user = {
    username: "sandy",
    password: "test"
}

//Serialize sessions
passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    if (user) {
        done(null, user);
    } else {
        done(new Error('User  does not exist'));
    }
});

//Use local strategy
passport.use(new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password',
        passReqToCallback: true
    },
    function(req, username, password, done) {
        if (user.username === username && user.password === password) {
            done(null, user);
        } else {
            done(null, false,
                req.flash('message', 'Authentication failed!')
            );
        };
    }
));

module.exports = passport;
