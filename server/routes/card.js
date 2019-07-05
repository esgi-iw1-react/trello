const express = require('express');
const Card = require('../models/card');
const List = require('../models/list');
const mongoose = require('mongoose');

const router = express.Router();

router.get('/', (req, res) => {
  Card.find(req.query).then(data => res.json(data));
});

router.get('/:id', (req, res) => {
  Card.findOne({_id: req.params.id})
  .then(data => res.json(data))
  .catch(error => console.log(error))
});

router.post('/:listId', (req, res) => {
  const card = new Card({
    _id: new mongoose.Types.ObjectId
  });
  card.save()
  .then(data => {
    List.findByIdAndUpdate(req.params.listId, { $push: { cards: data._id } }, {upsert: true},
      function(err, model) { console.log(err, model) });
    res.status(201).send(data)
  })
  .catch(error => res.status(500));
});

router.put('/:id', (req, res) => {
  const body = req.body;
  const doc = {description: body.description, title: body.title};
  Card.findOneAndUpdate({_id: req.params.id}, doc, {upsert:true}, function(err, doc){
    if (err) return res.send(500, { error: err });
    return res.send(doc);
  });
});

module.exports = router;