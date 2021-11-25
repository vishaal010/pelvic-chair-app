anychart.onDocumentReady(function () {
  // set the data
  var data = [
    { x: "schuin naar rechts", value: 30 },
    { x: "schuin naar lings", value: 10 },
    { x: "bovenrug van de leuning af", value: 25 },
    { x: "onder rug van de leuning af", value: 5 },
    { x: "goede zithouding", value: 15 },
  
  ];

  // create the chart
  var chart = anychart.pie();

  // set the chart title
  chart.title("percentage van jouw zithoudingen van de afgelopen week");

  // add the data
  chart.data(data);

  // display the chart in the container
  chart.container("container");
  chart.draw();
});
