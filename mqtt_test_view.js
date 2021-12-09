const path = require("path");
const mqttHandler = require('./mqtt_handler');

let mqttClient = new mqttHandler();
    mqttClient.connect();

function yourFunction(){
    // do whatever you like here
    let getData = mqttClient.data();
    let rightflap = getData.leftflap;
    let leftflap = getData.rightflap;
    let rightshoulder = getData.rightshoulder;
    let leftshoulder = getData.leftshoulder;
    console.log("de waarde van dit is:", rightflap, leftflap, rightshoulder, leftshoulder);
    setTimeout(yourFunction, 5000);
  }

  yourFunction()