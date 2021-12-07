require('dotenv').config();

const express = require("express");
var bodyParser = require("body-parser");
const app = express();
const port = 3000;
const path = require("path");
const mongoose = require('mongoose');
var mqttHandler = require('./mqtt_handler');
//const expressLayouts = require("express-ejs")

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true});

const conn = mongoose.connection;

conn.on('connected', function() {
    console.log('database is connected successfully');
});

conn.on('disconnected',function(){
    console.log('database is disconnected successfully');
})

conn.on('error', console.error.bind(console, 'connection error:'));

app.use("/css", express.static(__dirname + "/node_modules/bootstrap/dist/css"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

//app.use(expressLayouts);
app.set('view engine', 'ejs');

var mqttClient = new mqttHandler();
mqttClient.connect();

// Routes
app.post("/send-mqtt", function(req, res) {
  mqttClient.sendMessage(req.body.message);
  res.status(200).send("Message sent to mqtt");
});

// Express Middleware for serving static files
app.use("/public", express.static(__dirname + "/public"));

/*
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
*/

app.get("/", function (req, res) {
  res.render('index.ejs')
}); 

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
  
});


module.exports = conn;
