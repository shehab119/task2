var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});


router.get('/profile', function(req, res) {
  res.render('author', {name: 'Panda'});
});



router.get('/index', function(req, res) {
  res.render('index');
});



module.exports = router;
