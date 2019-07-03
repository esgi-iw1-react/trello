const db = require('../lib/db');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CommentSchema = Schema({
  _id: Schema.Types.ObjectId,
  text: String,
  author: [{ type: Schema.Types.ObjectId, ref: 'User' }],
});

const Comment = db.model('Comment', CommentSchema);
module.exports = Comment;