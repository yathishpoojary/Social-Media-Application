const MongoClient = require('mongodb').MongoClient;
const connctionString = "mongodb+srv://Yathish:dinga@usercluster.4ln2v.mongodb.net/test"
const bodyParser = require('body-parser');

// module.exports.MongoClient.connect(connctionString, (err, client) => {
//     if (err) return console.error(err);
//     console.log('Connected to Database');
//     const db = client.db('UserInfo');
//     const patientCollection = db.collection('UserCluster');

//     return patientCollection;
// })


var _db;

module.exports = {

  connectToServer: function( callback ) {
    MongoClient.connect( connctionString,  { useNewUrlParser: true }, function( err, client ) {
      _db  = client.db('UserInfo');
      return callback( err );
    });
  },

  getDb: function() {
    return _db;
  }
};