const db = require('../lib/db');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ListSchema = Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  cards: [{ type: Schema.Types.ObjectId, ref: 'Card' }],
});

const List = db.model('List', ListSchema);
module.exports = List;