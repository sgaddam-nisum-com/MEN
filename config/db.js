var mongoose = require('mongoose');
var config = require("../config/config");

var url = 'mongodb://'+config.db.username + ':' + config.db.password + '@' +
    config.db.host + ':' + config.db.port + '/' + config.db.name // Mongoose connection to MongoDB 

mongoose.connect(url, function(error) {
	console.log(url)
    if (error) {
        console.log(error);
    }
});

var db = mongoose.connection;
db.on('error', function callback(err) {
    console.log("Database connection failed. Error: " + err);
});
db.once('open', function callback() {
    console.log("Database connection successful.");
});


// Mongoose Schema definition
module.exports = mongoose;
