const express = require('express');
// const User = require('../models/user');
const Label = require('../models/label');
const mongoose = require('mongoose');

const router = express.Router();

router.get('/', (req, res) => {
  Label.find(req.query).then(data => res.json(data));
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
  Label.findOneAndUpdate({_id: req.params.id}, { name: req.body.name }, {upsert:true}, function(err, doc){
    if (err) return res.send(500, { error: err });
    return res.send(doc);
  });
});




module.exports = router;