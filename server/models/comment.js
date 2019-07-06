const db = require('../lib/db');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = Schema({
  _id: Schema.Types.ObjectId,
  text: { type: String, required: true},
  author: { type: Schema.Types.ObjectId, ref: 'User' },
  created_at: { type: Date, default: Date.now() }
});

const Comment = db.model('Comment', CommentSchema);
module.exports = Comment;