const db = require('../lib/db');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const Schema = mongoose.Schema;

const UserSchema = Schema({
  _id: Schema.Types.ObjectId,
  username: { type:String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  profile_picture: String
});

UserSchema.pre('save', function (next) {
  bcrypt.genSalt(10).then(salt => {
    bcrypt.hash(this.password, salt).then(hash => {
      this.password = hash;
      next();
    })
  });
  console.log(`Saving ${this.firstname} ...`);
});

UserSchema.methods = {
  register: function () {
    return this.save();
  }
};

UserSchema.statics = {
  login: function (email, password) {
    return new Promise((resolve, reject) => {
      User.findOne({'email': email}).then(user => {
        if (!user) return reject('User not found')
        bcrypt.compare(password, `${user.password}`).then(res => res ? resolve(user) : reject('Wrong password'));
      })
    });
  }
};

const User = db.model('User', UserSchema);
module.exports = User;