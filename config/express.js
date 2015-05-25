/**
 * Module dependencies.
 */
var express = require('express'),
    flash = require('connect-flash'),
    helpers = require('view-helpers'),
    compression = require('compression'),
    favicon = require('serve-favicon'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    session = require('express-session'),
    multipart = require('connect-multiparty');

var config = require("../config/config");

module.exports = function(app, passport) {

    console.log('Initializing Express');

    app.set('showStackError', true);

    app.use(compression({
        filter: function(req, res) {
            return (/json|text|javascript|css/).test(res.getHeader('Content-Type'));
        },
        level: 9
    }));

    //Setting the fav icon and static folder
    //app.use(favicon(config.root + '/public/img/icons/favicon.ico'));
    var pbc = app.get("root") + '/public';
    app.use(express.static(pbc));

    //Don't use logger for test env
    if (app.get('env') === 'development') {
        app.locals.pretty = true;
        app.use(logger('dev'));
    }

    //Set views path, template engine and default layout
    app.set('views', pbc + '/views');
    app.engine('html', require('ejs').renderFile);

    //Enable jsonp
    app.enable("jsonp callback");

    //cookieParser should be above session
    app.use(cookieParser());

    // request body parsing middleware should be above methodOverride
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    app.use(methodOverride());


    app.use(session({
        resave: false, // don't save session if unmodified
        saveUninitialized: false, // don't create session until something stored
        secret: config.session.key,
        cookie: {
            _expires: config.session.maxage
        }
    }));

    //connect flash for flash messages
    app.use(flash());

    //dynamic helpers
    app.use(helpers(config.app.name));

    //use passport session
    app.use(passport.initialize());
    app.use(passport.session());

    //Assume "not found" in the error msgs is a 404. this is somewhat silly, but valid, you can do whatever you like, set properties, use instanceof etc.
    app.use(function(err, req, res, next) {
        //Treat as 404
        if (~err.message.indexOf('not found')) return next();

        //Log it
        console.error(err.stack);

        //Error page
        res.status(500).render('500.html', {
            error: err.stack
        });
    });

    //Assume 404 since no middleware responded
    app.use(function(err, req, res, next) {
        res.status(404).render('404.html', {
            url: req.originalUrl,
            error: 'Not found'
        });
    });
};
