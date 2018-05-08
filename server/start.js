var fs = require('fs');
var https = require('https');
var app = require('./app.js');

app.set('port', process.env.PORT || 7777);
app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${app.get('port')}`);
});