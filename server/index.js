var express = require('express');
var WikiFakt = require('wikifakt');

var app = express();

var PORT = 9090;

app.get('/fakt', function(req, res) {
    WikiFakt.getRandomFact().then(function(fact) {
        var response = {
            status: 'success',
            fact: fact
        };
        res.json(response);
    }).catch(function(err) {
        res.json(500, {
            status: 'failure',
            message: 'error getting fact'
        })
    });
});

app.get('/title', function(req, res) {
    WikiFakt.getRandomArticleTitle().then(function(title) {
        res.json({
            status: 'success',
            title: title
        });
    }).catch(function(err) {
        res.json(500, {
            status: 'failure',
            message: 'error getting title'
        });
    });
});

app.listen(PORT, function() {
    console.log('WikiFakt server listening on port ' + PORT);
});
