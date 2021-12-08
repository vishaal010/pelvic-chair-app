// Grab the bar chart canvas
const barChartContext = document
  .getElementById('js-bar-chart')
  .getContext('2d');

// Chart configuration
const config = {
  type: 'bar',
  data: {
    // Chart data
    labels: ['Placeholder1', 'Placeholder2', 'Placeholder3', 'Placeholder4', 'Placeholder5'],
    
    // Colors to use #C472B9', '#E4CEE0', '#4382BB', '#84A6D6', '#DDF2F4'
    datasets: [
      {
        data: [67.7, 63.1, 54.7, 44.1, 40.2],
        label: 'Pelvic Chair',
        backgroundColor: ['#C472B9', '#E4CEE0', '#4382BB', '#84A6D6', '#DDF2F4'],
        borderWidth: 0.3,
        borderColor: 'black',
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
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