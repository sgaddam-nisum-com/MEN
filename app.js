/**
 * Module dependencies.
 */
var express = require('express'),
    path = require('path');
/**
 * Main application entry file.
 * Please note that the order of loading is important.
 */

// Load Configurations
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

//private modules
var auth = require('./config/middlewares/authorization');
var passport = require('./config/passport');

var app = express();
app.set("root", path.join(__dirname, ''));

//Initialize Express
require('./config/express')(app, passport);

//Initialize Routes
require('./config/routes').init(app, passport, auth);

//expose app
module.exports = app;
