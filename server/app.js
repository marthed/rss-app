var express = require('express');
var router = require('./routes/index');
var path = require('path');

var app = express();

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'pug');
app.use('/', router);
app.use(express.static(path.join(__dirname, '/../public')));



module.exports = app;