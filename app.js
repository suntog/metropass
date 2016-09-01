/* jshint esnext: true */

var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var app = express();

var passTypes = [
    {
        passtype: "prepaid",
        discount: "50%"
    },
    {
        passtype: "monthly",
        discount: "50%"
    },
    {
        passtype: "employee",
        discount: "100%"
    }
];
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(function(req, res, next) {
  console.log(`${req.method} request for ${req.url}`);
  next();
});
app.use(express.static("./public"));
app.use(cors());
app.get("/pass-types", function(req, res) {
  res.json(passTypes);
});


app.listen("3000");
console.log("Server running on port 3000");

module.exports = app;
