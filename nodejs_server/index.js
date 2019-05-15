const PORT = process.env.PORT || 5000;

var express = require('express');
var app = express();
var path = require('path');

// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

console.log("CONNECTION TO THE SERVER");
// Connecting to the database
mongoose.connect(dbConfig.url, dbConfig.opt)
.then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});



var bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser());

/*app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'views/index.html'));
});*/

var treeRoutes = require("./tree/tree_routes.js");
app.use("/tree", treeRoutes);

var polygonRoutes = require("./polygon/polygon_routes.js");
app.use("/polygon", polygonRoutes);

app.get('/test', function(req, res){
    res.send('hello world');
});
var server = app.listen(PORT, function(){
  console.log('Server listening on port '+PORT);
});