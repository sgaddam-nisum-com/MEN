/**
 * User Model
 */
var mongoose = require('../../config/db');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    _id: String,
    name: String,
    age: String,
    status: String,
    groups: [String]
});

var User = mongoose.model('users', UserSchema);

module.exports = User;
