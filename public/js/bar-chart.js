// Grab the bar chart canvas
const barChartContext = document
  .getElementById('js-bar-chart')
  .getContext('2d');
  

  /** Setup Block */
  

// Chart configuration
const config = {
  type: 'bar',
  data: {
    // Chart data
    labels: ['Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag', 'Zondag'],
    
    // Colors to use #C472B9', '#E4CEE0', '#4382BB', '#84A6D6' ,#C472B9', '#E4CEE0', '#4382BB'
    datasets: [
      {
        data: [67.7, 63.1, 54.7, 44.1,22,22,22],
        label: 'Pelvic Chair',
        backgroundColor: ['#F9D1D1', '#FFA4B6', '#F765A3', '#A155b9','#165BAA', '#0b1354', '#000'],
        borderWidth: 0.3,
        borderColor: 'black',
      },
      {
        data: [67.7, 63.1, 54.7, 44.1,22,22,22],
        label: 'Pelvic Chair',
        backgroundColor: ['#F9D1D1', '#FFA4B6', '#F765A3', '#A155b9','#165BAA', '#0b1354', '#000'],
        borderWidth: 0.3,
        borderColor: 'black',
      },
      {
        data: [67.7, 63.1, 54.7, 44.1,22,22,22],
        label: 'Pelvic Chair',
        backgroundColor: ['#F9D1D1', '#FFA4B6', '#F765A3', '#A155b9','#165BAA', '#0b1354', '#000'],
        borderWidth: 0.3,
        borderColor: 'black',
      },
      {
        data: [67.7, 63.1, 54.7, 44.1,22,22,22],
        label: 'Pelvic Chair',
        backgroundColor: ['#F9D1D1', '#FFA4B6', '#F765A3', '#A155b9','#165BAA', '#0b1354', '#000'],
        borderWidth: 0.3,
        borderColor: 'black',
      },
    ],
  },
  options: {
    responsive: true,
    scales: { 
      x: {
        type: 'time',
        time: {
            unit: 'month'
        }
    },
      y: {
        ticks: {
          callback: function (value) {
            return value + '%';
          },
        },
      },
    },
  },
};

// Creating a new chart instance
const newBarChart = new Chart(barChartContext, config);