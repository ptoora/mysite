var express = require('express');
var router = express.Router();
var fs = require('fs');
const LAYOUT_TITLE = 'Parsh\'s Testing Strategy Wiki'

/* GET home page. */
router.get('/', function(req, res, next) {
 
  res.render('index', { title: LAYOUT_TITLE});

});

/* */
router.get('/shorts', function(req, res, next) {
 
  var files = fs.readdirSync('./public/shorts/');
  res.render('shorts', { layoutTitle: LAYOUT_TITLE, title: 'Bite Size Blogs', shortArticles: files });

});

/* */
router.get('/longs', function(req, res, next) {
 
  var files = fs.readdirSync('./public/documents/');
  res.render('longs', { layoutTitle: LAYOUT_TITLE, title: 'Long Blogs And Documents', shortArticles: files });

});

module.exports = router;
