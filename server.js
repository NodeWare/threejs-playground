var express = require('express');
var colors = require('colors');
var app = express();

app.set('port', process.env.NODE_ENV || 3333);

app.use(express.static(__dirname + '/threejs'));
app.use(express.static(__dirname + '/build'));
app.use(express.static(__dirname + '/client'));
app.use(express.static(__dirname + '/bower_components'));

app.get('/', function (req, res) {
  res.send('ThreeJS Playground!');
});

var server = app.listen(app.get('port'), function () {
  var host = server.address().address
  var port = server.address().port
  console.log('Example app listening at http://%s:%s'.blue.bold, host, port)
});