/* jshint esnext: true */

var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var app = express();
var data = require("./data/passtypes");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(function(req, res, next) {
  console.log(`${req.method} request for ${req.url} - ${JSON.stringify(req.body)}`);
  next();
});
app.use(express.static("./public"));
app.use(cors());

app.get("/metropass-api", function(req, res) {
	res.json(data);
});
app.post("/metropass-api", function(req, res) {
    data.push(req.body);
    console.log(req.body);
    res.json(data);
});


app.listen("3000");
console.log("Metropass running on port 3000");

module.exports = app;
