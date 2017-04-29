var express = require('express');
var bodyParser = require('body-parser');
var rp = require('request-promise');
var Promise = require('bluebird');
var items = require('../database-mongo');
console.log(items )
   
var app = express();

// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: true} ));

app.post('/repos', function(req, res) {
  console.log(req)
  var result = req.body.term
  
  var options = {
    uri: `http://api.giphy.com/v1/gifs/search?q=${result}&api_key=dc6zaTOxFJmzC`
  };
   
  rp(options)
  .then((repos) => {

   var data = JSON.parse(repos).data
    
    data.forEach((x) => {
    var obj = {
      id: x.id, 
      time_stamp: new Date().getTime(),
      url: x.url,
      image: x.images.fixed_height_small.url
    };

    var gif = new items.Item(obj)
    gif.save(function(err, gif) {
      if(err) {
        console.error(err)
      }
    })   
    }) 
  })
  .catch((error) => {
    throw error
  });




})

app.get('/items', function (req, res) {
	
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

