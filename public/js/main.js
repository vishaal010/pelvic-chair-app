const socket = io()
let checkRunning = {}

// let numbers = []

        // let leftflap = document.getElementById('leftflap').dataset.leftflap
        var leftflap = '<%- JSON.stringify(leftflap) %>'
        var leftshoulder = '<%- JSON.stringify(leftshoulder) %>'
        var rightflap = '<%- JSON.stringify(rightflap) %>'
        var rightshoulder = '<%- JSON.stringify(rightshoulder) %>'


      
      
       
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
    labels: ['Rightflap', 'Leftflap', 'Rightshoulder', 'Leftshoulder'],
    
    // Colors to use #C472B9', '#E4CEE0', '#4382BB', '#84A6D6'
    datasets: [
      {
        // Chart data
        data: [22,11,23,2], 
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

// let someValue = 7;

// socket.emit('add', someValue);

// socket.on('update', (arr) => {
//     numbers = arr
//     console.log(arr);
//     newPieChart.data.datasets.data = arr;
//     newPieChart.update();
// console.log('NA',  numbers)
// }); 






function timer(){
  checkRunning.running = true
    var h3 = document.getElementsByTagName("h3");
    h3[0].innerHTML = "Timer Pelvic Chair";

    function updateChartData(chart, data, dataSetIndex){
      chart.data.datasets[dataSetIndex].data = data;
      chart.update();
    }
    
    socket.on('data1', (res) => {

      if(checkRunning.running){
        updateChartData(newPieChart,res.slice(0,5), 0);
      }
      else{
        return
      }
    })
    
    var sec         = 10,
        countDiv    = document.getElementById("timer"),
        countDown   = setInterval(function () {
            'use strict';
                    
            var min     = Math.floor(sec / 60),
                remSec  = sec % 60;
            
            if (remSec < 10) {
                
                remSec = '0' + remSec;
            
            }
            if (min < 10) {
                
                min = '0' + min;
            
            }
            countDiv.innerHTML = min + ":" + remSec;
            
            if (sec > 0) {
                
                sec = sec - 1;
                
            } else {
                
                clearInterval(countDown);
                
                countDiv.innerHTML = 'countdown done';
    
                checkRunning.running = false
               
                
                
            }
        }, 1000);
}
