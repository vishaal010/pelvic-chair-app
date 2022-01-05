const socket = io()
let checkRunning = {}
let rightflapSingleData     = []
let leftflapSingleData     = []
let leftshoulderSingleData  = []
let rightshoulderSingleData = []



let numbers = [22,11,23,2]

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
        data: numbers, 
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
  console.log('client');
  checkRunning.running = true
    var h3 = document.getElementsByTagName("h3");
    h3[0].innerHTML = "Timer Pelvic Chair";

    function updateChartData(chart, data, dataSetIndex){
      chart.data.datasets[dataSetIndex].data = data;
      chart.update();
    }

 
    
    socket.on('data1', (res) => {
    const average = arr => arr.reduce( ( p, c ) => p + c, 0 ) / arr.length;  
    const result = average(res); 

   

    let rightflap     = res[0]
    let leftflap      = res[1]
    let leftshoulder  = res[2]
    let rightshoulder = res[3]

 
      if(checkRunning.running){
        updateChartData(newPieChart,res.slice(0,4), 0);
        
    

        rightflapSingleData.push(rightflap)
        leftflapSingleData.push(leftflap)
        leftshoulderSingleData.push(leftshoulder)
        rightshoulderSingleData.push(rightshoulder)


        console.log('Rightflap : ', rightflapSingleData);
        console.log('Leftflap: ', leftflapSingleData);
        console.log('Rightshoulder: ', leftshoulderSingleData);
        console.log('Leftshoulder: ', rightshoulderSingleData);

        



        // localStorage.setItem("rightflapAVG", JSON.stringify(rightflapAVG));

        // let storedNames = JSON.parse(localStorage.getItem("rightflap"));

        // console.log('Dit is rightflap gemiddelde',rightflapAVG)
 
      }
      else{

        let rightflapAVG     = average(rightflapSingleData)
        let leftflapAVG      = average(leftflapSingleData)
        let rightshoulderAVG = average(rightshoulderSingleData)
        let leftshoulderAVG  = average(leftshoulderSingleData)

        console.log('Rightflap gemiddelde : ',rightflapAVG);
        console.log('Leftflap  gemiddelde :',leftflapAVG);
        console.log('Rightshoulder gemiddelde : ',rightshoulderAVG);
        console.log('Leftshoulder gemiddelde : ', leftshoulderAVG);
      
         socket.emit("data", rightflapAVG,leftflapAVG,rightshoulderAVG,leftshoulderAVG)
         socket.on('callback', function(data) {
          console.log(data);
      });


         console.log('pol');
      }
    })
    
    var sec         = 20,
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
                
                countDiv.innerHTML = 'Bedankt! Neem gerust een pauze :)';
    
                checkRunning.running = false
               
                
                
            }
        }, 1000);
}
