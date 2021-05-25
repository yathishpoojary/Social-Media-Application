const db = require("./db");

function getUserInfo(userInfo, done) {
    db.connectToServer();

    db.getDb('UserCluster').find().toArray()
      .then(results => {
        done(null, results)
      })
      .catch(error => {
          done(error, null)
      })
}

module.exports = {
    getUserInfo
}