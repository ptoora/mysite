var pgp = require('pg-promise')(/*options*/)
const db = pgp('postgres://nzuqwhvrcdvucj:bdb8aa36346f3ce202300536e41129f17a2dd59356332523d01bee08ba276811@ec2-54-225-115-234.compute-1.amazonaws.com:5432/d90a3m6d7lj3b8?ssl=true')

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