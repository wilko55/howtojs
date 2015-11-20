var express = require('express');
var router = express.Router();
var books = require('./models/books.js');
var getCover = require('./services/book-service.js');
var Promise = require('promise');

/* GET home page. */
router.get('/', function(req, res) {
    res.send('Home');
});

module.exports = router;
