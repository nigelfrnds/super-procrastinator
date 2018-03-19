const express = require('express');
const User = require('../models/user');

let router = express.Router();

router.post('/register', (req,res) => {
  const { email, password, username } = req.body;


  res.send({ message: 'user' });
});

router.post('/login', (req,res) => {
  console.log(req.body);
  res.send({ message: 'user' });
});

module.exports = router;
