const MongoClient = require('mongodb').MongoClient;
const connctionString = "mongodb+srv://Yathish:dinga@usercluster.4ln2v.mongodb.net/test"
const bodyParser = require('body-parser');

module.exports = {
    connection = function() {
        MongoClient.connect(connctionString, (err, client) => {
            if (err) return console.error(err);
            console.log('Connected to Database');
            const db = client.db('UserInfo');
            return db;
        })
    } 
};