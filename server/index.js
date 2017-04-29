var express = require('express');
var bodyParser = require('body-parser');
var rp = require('request-promise');
var items = require('../database-mongo');

var app = express();

// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded( {extended: true}));

app.post('/repos', function(req, res) {
  
	console.log('I am in post time')
})

app.get('/items', function (req, res) {
	console.log('sdflhsdkfh')
  items.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

