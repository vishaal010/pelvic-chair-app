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
    labels: ['Placeholder1', 'Placeholder2', 'Placeholder3', 'Placeholder4', 'Placeholder5'],
    
    // Colors to use #C472B9', '#E4CEE0', '#4382BB', '#84A6D6', '#DDF2F4'
    datasets: [
      {
        // Chart data
        data: [30, 24, 58, 64.1, 10.2],
        label: 'Pelvic Chair',
        backgroundColor: ['#C472B9', '#E4CEE0', '#4382BB', '#84A6D6', '#DDF2F4'],
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