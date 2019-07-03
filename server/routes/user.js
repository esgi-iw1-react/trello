const express = require('express');
const User = require('../models/user');
const mongoose = require('mongoose');

const router = express.Router();

router.get('/', (req, res) => {
  User.find(req.query).then(data => res.json(data));
});

router.get('/:id', (req, res) => {
  console.log('ok');
  User.findOne({_id: req.params.id})
  .then(data => res.json(data))
  .catch(error => console.log(error))
});

router.post('/', (req, res) => {
  const user = new User({
    _id: new mongoose.Types.ObjectId,
    ...req.body
  });
  user.save()
    .then(data => res.status(201).send(data))
    .catch(error => res.status(500));
});

module.exports = router;