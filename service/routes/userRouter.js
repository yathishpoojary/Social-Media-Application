const express = require("express");
const router = express.Router();
const userInfoDB = require('./../database/userInfoDB');

router.get("getUser/:userInfo", function(req, resp, next) {
    console.log("from client = > " + JSON.stringify(req.params.userInfo));
    let userInfo = req.params.userInfo;
    if(!userInfo) {
        resp.status(400).send({error: "invalid Data"});
    }
    userInfoDB.getAllTestList(userInfo, function(err, result) {
            if(err) {
                resp.status(400).send(err);
            } else {
                resp.status(200).send(result);
            }
        });

})

module.exports = router;