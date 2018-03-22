const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/reddit', (req, res) => {
  axios.get('https://www.reddit.com/hot.json')
    .then(response => {
      res.send({ posts: response.data.data.children });
    })
    .catch(err => {
      console.log(err);
      res.status(404).send({ err });
    });
});

module.exports = router;
