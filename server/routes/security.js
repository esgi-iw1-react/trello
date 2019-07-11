const createToken = require("../lib/auth").createToken;
const express = require("express");
const User = require("../models/user");
const mongoose = require('mongoose');

const router = express.Router();

router.post("/login", (req, res) => {
  console.log("here");
  User.login(req.body.email, req.body.password)
    .then(user => {
      const token = createToken({
        username: user.username
      });
      user.token = token.token;
      user.password = undefined;
      res.status(201).send( user );
    })
    .catch(error => {
      res.status(400).send("Invalid token");
    });

  console.log("Login...");
});

router.post("/register", (req, res) => {
  const user = new User({
    _id: new mongoose.Types.ObjectId,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: req.body.password,
  });

  user.register().then(data => {
    console.log(data);

    const token = createToken({
      firstName: data.firstname
    });
    console.log(token);

    res.status(201).send({ token });

  }).catch(error => {
    console.log(error);
    res.status(400).send("[register] Invalid token");
  });

  console.log("Register...");
});

module.exports = router;
