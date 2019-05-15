const PORT = process.env.PORT || 8081;

var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');
var util = require('util');
var jsonfile = require('jsonfile');
var opn = require('opn');

var bodyParser = require('body-parser');


app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser());


var server = app.listen(PORT, function(){
  console.log('Server listening on port '+PORT);
});