var express = require('express');
var cors = require('cors');
var serveStatic = require('serve-static');
var WikiFakt = require('wikifakt');

var PORT = process.env.PORT || 9090;
var app = express();
var corsOption = {
  origin: 'http://localhost:8080'
};

app.use(serveStatic(__dirname + '/build'));

app.get('/', cors(corsOption), function(req, res) {
  res.sendFile('build/index.html', {
    root: __dirname
  });
});

app.get('/fakt', cors(corsOption), function(req, res) {
  WikiFakt.getRandomFact()
    .then(function(fact) {
      console.log('returning fact');
      res.json({
        status: 'success',
        fact: fact
      });
    })
    .catch(function(err) {
      res.json(500, {
        status: 'failure',
        message: 'error getting fact'
      });
    });
});

app.get('/title', cors(corsOption), function(req, res) {
  WikiFakt.getRandomArticleTitle()
    .then(function(title) {
      console.log('returning title');
      res.json({
        status: 'success',
        title: title
      });
    })
    .catch(function(err) {
      res.json(500, {
        status: 'failure',
        message: 'error getting title'
      });
    });
});

app.listen(PORT, function() {
  console.log('WikiFakt server listening on port ' + PORT);
});
