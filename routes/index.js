var express = require('express');
var router = express.Router();
var fs = require('fs');
const LAYOUT_TITLE = 'Parsh\'s Testing Wiki'
var db = require('../models/db')

/* GET home page. */
router.get('/', function(req, res, next) {
  const path = 'home'
  db.incPageCount(path)
  var myFunc = (count) => res.render('index', {  layoutTitle: LAYOUT_TITLE, hitCount: count})
  db.getPageCount(path, myFunc)
});

/* */
router.get('/shorts', function(req, res, next) {
  const path = req.path.replace(/\//g,'') 
  db.incPageCount(path)
  var files = fs.readdirSync('./public/shorts/');
  var myFunc = (count) => res.render(path, { layoutTitle: LAYOUT_TITLE, title: 'Bite Size Blogs', shortArticles: files, hitCount: count });
  db.getPageCount(path, myFunc)
});

/* */
router.get('/longs', function(req, res, next) {
  const path = req.path.replace(/\//g,'') 
  db.incPageCount(path)
  var files = fs.readdirSync('./public/documents/').map(line => line.trim());
  var myFunc = (count) => res.render('longs', { layoutTitle: LAYOUT_TITLE, title: 'Blogs And Documents', longArticles: files, hitCount: count });
  db.getPageCount(path, myFunc)
});


/* */
router.get('/strategy', function(req, res, next) {
  const path = req.path.replace(/\//g,'') 
  db.incPageCount(path)
  var myFunc = (count) => res.render('strategy', { layoutTitle: LAYOUT_TITLE, title: 'Testing Strategy Template', hitCount: count });
  db.getPageCount(path, myFunc)
});


/* */
router.get('/backlog', function(req, res, next) {
  const path = req.path.replace(/\//g,'') 
  db.incPageCount(path)
  var myFunc = (count) => res.render('backlog', { layoutTitle: LAYOUT_TITLE, title: 'Trello Backlog', hitCount: count });
  db.getPageCount(path, myFunc)
});


/* */
router.get('/code', function(req, res, next) {
  const path = req.path.replace(/\//g,'') 
  db.incPageCount(path)
  var codeProjects = [{url:"https://github.com/ptoora/mysite",description:"The GIT repo for this Express project with Webdriver.io tests"},
                      {url: "https://github.com/telegraph/wiremock-swagger",description:"Scala Swaggerised Stub In Docker"},
                      {url: "https://github.com/culture-trip/swagger-wiremock", description:"Java Swaggerised Stub In Docker"}]
  var myFunc = (count) => res.render('code', { layoutTitle: LAYOUT_TITLE, title: 'Software Projects', projects: codeProjects, hitCount: count });
  db.getPageCount(path, myFunc)
});


module.exports = router;
