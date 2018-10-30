var pgp = require('pg-promise')(/*options*/)
const db = pgp(process.env.DATABASE_URL)

exports.getPageCount = function(pageName, callback) {
    const query  = 'SELECT count from counter where id=\''+pageName+'\''
    db.one(query, [true])
  .then( data => {
    callback(data['count']);
  })
  .catch(function (error) {
    console.log('ERROR:', error)
  })
}

exports.incPageCount = function(pageName) {
    const query  = 'update counter set count=count+1 where id=\''+pageName+'\''
    db.none(query, [true])
  .then( data => {
  })
  .catch(function (error) {
    console.log('ERROR:', error)
  })
}