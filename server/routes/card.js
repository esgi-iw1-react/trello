import Label from "../../client/src/components/Label/Label";

const express = require('express');
const Card = require('../models/card');
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

router.post('/', (req, res) => {
  const user = new Card({
    _id: new mongoose.Types.ObjectId,
    ...req.body
  });
  user.save()
  .then(data => res.status(201).send(data))
  .catch(error => res.status(500));
});

module.exports = router;