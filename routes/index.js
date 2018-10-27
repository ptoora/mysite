var express = require('express');
var router = express.Router();
var fs = require('fs');
const LAYOUT_TITLE = 'Parsh\'s Testing Wiki'
// var pgp = require('pg-promise')(/*options*/)
// const db = pgp('')
// var counter=undefined

/* GET home page. */
router.get('/', function(req, res, next) {

  // db.one('SELECT count from counter where id=\'home\'', [true])
  // .then( data => {
  //   res.render('index', {  layoutTitle: LAYOUT_TITLE, hitCount: data.json});
  // })
  // .catch(function (error) {
  //   console.log('ERROR:', error)
  // })

  res.render('index', {  layoutTitle: LAYOUT_TITLE});

});

/* */
router.get('/shorts', function(req, res, next) {

  var files = fs.readdirSync('./public/shorts/');
  res.render('shorts', { layoutTitle: LAYOUT_TITLE, title: 'Bite Size Blogs', shortArticles: files });

});

/* */
router.get('/longs', function(req, res, next) {
 
  var files = fs.readdirSync('./public/documents/').map(line => line.trim());
  res.render('longs', { layoutTitle: LAYOUT_TITLE, title: 'Blogs And Documents', longArticles: files });

});


/* */
router.get('/strategy', function(req, res, next) {
 
  res.render('strategy', { layoutTitle: LAYOUT_TITLE, title: 'Testing Strategy Template' });

});


/* */
router.get('/code', function(req, res, next) {
 
  var codeProjects = [{url: "https://github.com/telegraph/wiremock-swagger",description:"Scala Swaggerised Stub In Docker"},
                      {url: "https://github.com/culture-trip/swagger-wiremock", description:"Java Swaggerised Stub In Docker"}]
  res.render('code', { layoutTitle: LAYOUT_TITLE, title: 'Software Projects', projects: codeProjects });

});


module.exports = router;
