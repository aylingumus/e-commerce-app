const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json()); // parse requests of content-type: application/json
app.use(bodyParser.urlencoded({ extended: true })); // parse requests of content-type: application/x-www-form-urlencoded

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var routes = require("./app/routes/subscription.routes.js"); // importing route
routes(app); //register the route

// simple route
app.get("/", (req, res) => {
  res.sendFile(__dirname+'/client/src/index.html');
});

// set port, listen for requests
app.listen(port, () => console.log(`Server app listening at http://localhost:${port}`))