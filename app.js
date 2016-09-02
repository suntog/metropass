/* jshint esnext: true */

var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var app = express();

var passTypes = [
    {
        passtype: "Monthly Pass - Bus",
        description: "Pass for unlimited rides on the Blus for the month",
        discount: {
          standard: 0,
          student: 50,
          senior: 50
        }
    },
    {
        passtype: "Monthly Pass - Subway",
        description: "Pass for unlimited rides on the Subway for the month",
        discount: {
          standard: 0,
          student: 50,
          senior: 50
        }
    },
    {
        passtype: "Monthly Pass - Commuter Rail",
        description: "Pass for unlimited rides on the Commuter Rail for the month",
        discount: {
          standard: 0,
          student: 50,
          senior: 50
        }


    },
    {
        passtype: "Prepaid Pass - Bus",
        description: "Pass to prepay a balance to pay for each ride on the Bus",
        discount: {
          standard: 0,
          student: 50,
          senior: 50
        }
    },
    {
        passtype: "Employee Pass",
        description: "Special Pass for unlimited rides on the Bus, Subway and Commuter Rail",
        discount: {standard: 100}
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

app.get("/metropass-api", function(req, res) {
	res.json(passTypes);
});
app.post("/metropass-api", function(req, res) {
    skierTerms.push(req.body);
    res.json(passTypes);
});

app.listen("3000");
console.log("Metropass running on port 3000");

module.exports = app;
