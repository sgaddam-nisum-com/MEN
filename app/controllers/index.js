/**
 * Module dependencies.
 */

var User = require('../models/user');

exports.home = function(req, res, next) {    
    res.render('home.html', {
        welcome: "Hi",
        user: req.user
    });
};

exports.signin = function(req, res, next) {
    console.log("signin----")
    User.find({}, function(err, docs) {
        console.log(docs);
    });
    res.render('signin.html', {
        message: req.flash('message')
    });
};

exports.register = function(req, res, next) {
    res.render('register.html', {});
};

exports.other = function(req, res, next) {
    res.render('other.html');
};

exports.signout = function(req, res, next) {
    console.log("siging out............");
    req.logout();
    res.redirect('/');
};
