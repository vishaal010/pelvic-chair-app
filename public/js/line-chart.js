// Grab the bar chart canva
const lineChartContext = document
  .getElementById('js-line-chart')
  .getContext('2d');

// Creating a new chart instance
const newLineChart = new Chart(lineChartContext, {
  // Chart configuration
  type: 'line',
  data: {
    // Chart Label Vertical
    labels: ['Placeholder1', 'Placeholder2', 'Placeholder3', 'Placeholder4', 'Placeholder5'],
    datasets: [
      {
        // Chart lable
        label: 'Peliv Chair',
        // Chart data
        data: [67.7, 63.1, 54.7, 44.1, 40.2],
        // Chart data background color
        backgroundColor: ['#C472B9', '#E4CEE0', '#4382BB', '#84A6D6', '#DDF2F4'],
        // Chart border styles
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
});