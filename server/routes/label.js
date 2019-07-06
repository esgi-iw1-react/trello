const express = require('express');
// const User = require('../models/user');
const Label = require('../models/label');
const Card = require('../models/card');
const List = require('../models/list');
const mongoose = require('mongoose');

const router = express.Router();

router.get('/', (req, res) => {
  Card.find(req.query).then(data => res.json(data));
});

router.get('/:id', (req, res) => {
  Card.findOne({_id: req.params.id})
  .populate({
    path: 'comments',
    populate: { path: 'author', model: 'User' }
  })
  .populate('labels')
  .populate('users')
  .then(data => res.json(data))
  .catch(error => console.log(error))
});

router.post('/', (req, res) => {
  const label = new Label({
    _id: new mongoose.Types.ObjectId,
    name: req.body.name,
    color: req.body.color,
  });
  label.save()
  .then(data => res.json(data))
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