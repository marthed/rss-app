const express = require('express');
const router = express.Router();

router.get('/', function(req, res) { 
  res.render('index', { title: 'A code case with RSS', message: 'Hello world!'})
});

module.exports = router;