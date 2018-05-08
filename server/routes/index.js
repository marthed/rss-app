const express = require('express');
const router = express.Router();
const latestRoute = require('./latest.js');

router.get('/', function(req, res) { res.send('index.html')});
router.get('/latest', latestRoute.getLatestFeeds);

module.exports = router;