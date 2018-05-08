const express = require('express');
const router = express.Router();

router.get('/', function(req, res) { 
  res.render('index', { title: 'The latest RSS feeds', message: 'Hello World'})
});

module.exports = router;