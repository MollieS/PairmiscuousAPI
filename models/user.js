var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: String,
  username: String,
  cohort: String
});

module.exports = mongoose.model('User', UserSchema);


