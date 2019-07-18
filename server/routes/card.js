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
  .populate({
    path: 'comments',
    populate: { path: 'author', model: 'User' }
  })
  .populate('labels')
  .populate('users')
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

router.put('/reorder/', (req, res) => {
  const { lists } = req.body;
  
  List.findOneAndUpdate({_id: '5d2d847cf96697001c316e91'}, { cards: [] }, { upsert: true }, (err, model) => console.log(err, model));
  for(let k in lists){
    if(!lists.hasOwnProperty(k)){
      return;
    }
    List.findOneAndUpdate({ _id: `${k}` }, { cards: [] }, { upsert: true }, (err, model) => console.log(err, model));
    lists[k].forEach(card => {
      console.log('cardId', card._id );
      Card.findOneAndUpdate({_id: `${card._id}`}, { index: card.index }, {upsert: true}, (err, model) => console.log(err, model));
      List.findOneAndUpdate({_id: `${k}`}, { $push: { cards: `${card._id}`} }, {upsert: true}, (err, model) => console.log(err, model));
    });
  }
  
  return res.send('ok');
});

router.put('/:id', (req, res) => {
  const body = req.body;
  let doc = {};
  if(body.description){
    doc.description = body.description;
  }
  if(body.title){
    doc.title = body.title;
  }
  Card.findOneAndUpdate({_id: req.params.id}, doc, {upsert:true}, function(err, doc){
    if (err) return res.send(500, { error: err });
    return res.send(doc);
  });
});

router.put('/:cardId/label/add/:labelId', (req, res) => {
  Card.findByIdAndUpdate({_id: req.params.cardId}, { $push: { labels: req.params.labelId} }, (err, doc) => {
    if (err) return res.send(500, { error: err});
    return res.send(doc);
  })
});

router.put('/:cardId/label/remove/:labelId', (req, res) => {
  Card.findByIdAndUpdate({_id: req.params.cardId}, { $pull: { labels: req.params.labelId} }, (err, doc) => {
    if (err) return res.send(500, { error: err});
    return res.send(doc);
  })
});

router.put('/:cardId/user/add/:userId', (req, res) => {
  Card.findByIdAndUpdate({_id: req.params.cardId}, {$push: {users: req.params.userId}}, (err, doc) => {
    if (err) return res.send(500, {error: err});
    return res.send(doc);
  })
});

router.put('/:cardId/user/remove/:userId', (req, res) => {
  Card.findByIdAndUpdate({_id: req.params.cardId}, {$pull: {users: req.params.userId}}, (err, doc) => {
    if (err) return res.send(500, {error: err});
    return res.send(doc);
  })
});



module.exports = router;