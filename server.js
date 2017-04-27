// Dependencies - NPM Packages - express, body-parser & path

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Express Configuration

var app = express();

// Set Initial Port

var PORT = process.env.PORT || 8116

// Body Parser code

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Router Statements

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Listening Code:

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
