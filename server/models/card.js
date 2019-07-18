const db = require('../lib/db');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CardSchema = Schema({
  _id: Schema.Types.ObjectId,
  title: String,
  description: String,
  labels: [{ type: Schema.Types.ObjectId, ref: 'Label' }],
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
  users: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  index: Number,
});

const Card = db.model('Card', CardSchema);
module.exports = Card;