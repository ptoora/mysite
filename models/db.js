var pgp = require('pg-promise')(/*options*/)
const db = pgp(process.env.DATABASE_URL)

exports.getPageCount = function(pageName, callback) {
    const query  = 'SELECT count from counter where id=\''+pageName+'\''
    db.one(query, [true])
  .then( data => {
    callback(data['count']);
  })
  .catch(function (error) {
      if (error.message ='No data returned from the query.') {
        console.log('Adding a new row for:',pageName)
        db.none('INSERT INTO counter(id, count) VALUES($1, $2)', [pageName, 0])
      .then(data => {
        callback(0);
      })
      .catch(error => {
         console.log('ERROR:', error); // print error;
      });
      } else {
        console.log('ERROR:', error)
      }
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