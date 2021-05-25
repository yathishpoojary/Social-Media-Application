const { connection } = require("mongoose");
const db = require("./db");

function getUserInfo(userInfo, done) {
    const connection = db.connection();
    connection.findOne(userInfo)
        db.getDb('UserCluster').find().toArray()
        .then(results => {
            done(null, results);
        })
        .catch(error => {
            done(error, null);
        })
}

function getAllUserInfo(done) {
    const connection = db.connection();
    connection.find().toArray()
    .then(results => {
        done(null, results);
      })
      .catch(error => {
          done(error, null);
      })
}

function addUserInfo(userInfo, done) {
    const connection = db.connection();
    connection.insertOne(userInfo);
    patientCollection.insertOne(userInfo)
    .then(results => {
        done(null, results);
      })
      .catch(error => {
          done(error, null);
      })
}

function updateUserInfo(userInfo, done) {
    const connection = db.connection();
    connection.findOneAndUpdate(userInfo)
    .then(results => {
        done(null, results)
      })
      .catch(error => {
          done(error, null)
      })
}

function deleteUserInfo(userInfo, done) {
    const connection = db.connection();
    connection.deleteOne(userInfo)
    .then(results => {
        done(null, results)
      })
      .catch(error => {
          done(error, null)
      })
}

module.exports = {
    getUserInfo,
    addUserInfo,
    updateUserInfo,
    deleteUserInfo,
    getAllUserInfo
}