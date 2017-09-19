var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/guess', function(req, res, next) {
  res.render('index', { title: 'guess'  });
});

module.exports = router;
