var express = require('express');
var router = require('./routes/index');
var path = require('path');

var app = express();

console.log(path.join(__dirname, '/../public'));
app.use(express.static(path.join(__dirname, '/../public')));
app.set('view engine', 'pug');

app.use('/', router);


module.exports = app;