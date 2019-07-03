const db = require('../lib/db');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = Schema({
  _id: Schema.Types.ObjectId,
  username: String,
  email: String,
  password: String,
  profile_picture: String
});

const User = db.model('User', UserSchema);
module.exports = User;