// Requires \\
var express = require('express');
var bodyParser = require('body-parser');
var countries = require('./models/countries')
// var _ = require('lodash')
// console.log(countries)

// Create Express App Object \\
var app = express();

// Application Configuration \\
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Routes \\
app.get('/', function(req, res){
  res.sendFile('index.html', {root: './public/html/'})
});

app.get('/countries', function(req, res) {
	res.send(countries)
})

// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})