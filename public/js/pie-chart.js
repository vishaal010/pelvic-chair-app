const mqttHandler = require('../../mqtt_handler');

let mqttClient = new mqttHandler();
    mqttClient.connect();

/** Get data from sensors */
let getData = mqttClient.data();
let rightflap = getData.rightflap;
let leftflap = getData.leftflap;
let rightshoulder = getData.rightshoulder;
let leftshoulder = getData.leftshoulder;


// Grab the bar chart canva
const pieChartContext = document
  .getElementById('js-pie-chart')
  .getContext('2d');

// Creating a new chart instance
const newPieChart = new Chart(pieChartContext, {
  // Chart configuration
  type: 'pie',
  data: {
    // Chart Label Vertical
    labels: ['Rightflap', 'Leftflap', 'Rightshoulder', 'Reftshoulder'],
    
    // Colors to use #C472B9', '#E4CEE0', '#4382BB', '#84A6D6'
    datasets: [
      {
        // Chart data
        data: [rightflap, leftflap, rightshoulder, leftshoulder],
        label: 'Pelvic Chair',
        backgroundColor: ['#C472B9', '#E4CEE0', '#4382BB', '#84A6D6'],
        borderWidth: 0.3,
        borderColor: 'black',
      },
    ],
  },
  options: {
    responsive: true,
    // Maintain the original canvas aspect ratio (width / height) when resizing.
    maintainAspectRatio: false,
  },
});