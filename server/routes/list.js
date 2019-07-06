const express = require('express');
const List = require('../models/list');
const mongoose = require('mongoose');

const router = express.Router();

router.get('/', (req, res) => {
  List.find(req.query)
    .populate( {
      path: 'cards',
      populate: [
        { path: 'labels', model: 'Label' },
        { path: 'comments', model: 'Comment',
          populate: {path: 'author', model: 'User'}
        }
      ],
    } )
  .then(data => res.json(data));
});

router.get('/:id', (req, res) => {
  List.findOne({_id: req.params.id})
  .populate('cards')
  .then(data => res.json(data))
  .catch(error => console.log(error))
});

router.post('/', (req, res) => {
  const list = new List({
    _id: new mongoose.Types.ObjectId,
    name: req.body.name
  });
  list.save()
  .then(data => res.status(201).send(data))
  .catch(error => res.status(500));
});


module.exports = router;