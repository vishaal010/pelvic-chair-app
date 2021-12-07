const mqtt = require('mqtt');
let rightflap = 0
let leftflap = 0
class MqttHandler {
    constructor() {
      this.mqttClient = null;
      this.host = 'mqtt://localhost';
      this.username = 'pelvic'; // mqtt credentials if these are needed to connect
      this.password = 'chair';
    }

connect() {
    // Connect mqtt with credentials (in case of needed, otherwise we can omit 2nd param)
    //this.mqttClient = mqtt.connect(this.host);
    this.mqttClient = mqtt.connect(this.host, { username: this.username, password: this.password });

    // Mqtt error calback
    this.mqttClient.on('error', (err) => {
      console.log(err);
      this.mqttClient.end();
    });

    // Connection callback
    this.mqttClient.on('connect', () => {
      console.log(`mqtt client connected`);
    });

    // mqtt subscriptions
    this.mqttClient.subscribe('esp/test', {qos: 0});

    // When a message arrives, console.log it
    this.mqttClient.on('message', function (topic, message) {
        console.log(message.toString());
        let achair = JSON.parse(message.toString());
        leftflap = achair.values[0];
        rightflap = achair.values[1];
        leftShoulder = achair.values[2];
        rightShoulder = achair.values[3];
        console.log(achair.device);
        console.log(achair.sensorType);
        console.log(leftflap);
        console.log(rightflap);
        console.log(leftShoulder);
        console.log(rightShoulder);
    });

    this.mqttClient.on('close', () => {
      console.log(`mqtt client disconnected`);
    });
  }

  // Sends a mqtt message to topic: esp/test
  //sendMessage(message) {
    //this.mqttClient.publish('esp/test', message);
  //}
}

module.exports = MqttHandler;
