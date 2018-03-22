const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const userRoutes = require('./routes/users');
const postRoutes = require('./routes/post');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/users',userRoutes);
app.use('/api/posts',postRoutes);

app.get('/api', (req,res) => {
  res.send({ message: 'jello' });
});

module.exports = app;
