var express = require('express');
var path = require('path');
// var favicon = require('serve-favicon');
// var logger = require('morgan');
var bodyParser = require('body-parser');

var app = express();

// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, 'dist')));
var cors = require('cors')
var userRouter = require("./routes/userRouter");

// catch 404 and forward to error handler
app.use(cors());

app.use("/api/user", userRouter);

module.exports = app;