const express = require('express');
const Card = require('../models/card');
const Comment = require('../models/comment');
const mongoose = require('mongoose');

const router = express.Router();

router.post('/:cardId', (req, res) => {
  const comment = new Comment({
    _id: new mongoose.Types.ObjectId,
    text: req.body.text,
    author: req.body.author
  });
  comment.save()
  .then(data => {
    Card.findByIdAndUpdate(req.params.cardId, { $push: { comments: data._id } }, {upsert: true},
      function(err, model) { console.log(err, model) });
    res.status(201).send(data)
  })
  .catch(error => res.status(500));
});

// router.get('/:id', (req, res) => {
//   Comment.findOne({ _id: req.params.id })
//     .populate('author')
//     .then(data => res.json(data))
//     .catch(err => console.log(err))
// });

module.exports = router;