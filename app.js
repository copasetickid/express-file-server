var express = require("express"),
    path = require("path"),
    fs = require("fs");

var app = express();

app.use(function(req, res, next) {
  console.log("Request IP: " + req.url);
  console.log("Request date:" + new Date());
  next();
});

app.listen(3000, function() {
  console.log("App started on port 3000");
});
