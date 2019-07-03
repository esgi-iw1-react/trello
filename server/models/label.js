const db = require('../lib/db');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LabelSchema = Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  color: String
});

const Label = db.model('Label', LabelSchema);
module.exports = Label;