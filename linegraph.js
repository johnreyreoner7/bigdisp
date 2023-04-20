google.charts.load('current', {'packages': ['corechart']});
google.charts.setOnLoadCallback(drawCharts);

function drawCharts(){

      drawLineChart();
      drawBarChart1();
      drawBarChart2();
}

function drawLineChart() {
  var data = google.visualization.arrayToDataTable([
    ['Year', 'Palay Production (Metric Tons)', 'Palay Consumption (Metric Tons)'],
    ['2012', 18.03, 12.850],
    ['2013', 18.44, 12.850],
    ['2014', 18.97, 13.000],
    ['2015', 18.15, 12.900],
    ['2016', 17.63, 12.900],
    ['2017', 19.28, 13.250],
    ['2018', 19.07, 14.100],
    ['2019', 18.81, 14.300],
    ['2020', 19.29, 14.450],
    ['2021', 19.96, 15.450]
  ]);

  var options = {
    title: 'Rice Production and Consumption in the Philippines',
    curveType: 'function',
    legend: { position: 'bottom' },
    pointSize: 10,
    height: 400,
    responsive: true

  };

  var chart = new google.visualization.LineChart(document.getElementById('line_graph'));
  
  function resizeChart() {
    chart.draw(data, options);
  }

  window.addEventListener('resize', resizeChart);
  
  chart.draw(data, options);


}

function drawBarChart1() {
  var data = google.visualization.arrayToDataTable([
    ['Year', 'Value (Ten Thousands USD)', 'Value Growth (%)'],
    ['2012', 126.7701, -41.36],
    ['2013', 538.8545, 325.06],
    ['2014', 331.7514, -38.43],
    ['2015', 80.1834, -75.83],
    ['2016', 31.8225, -60.31],
    ['2017', 88.5205, 178.16],
    ['2018', 47.0282, -46.87],
    ['2019', 56.6892, 20.54],
    ['2020', 55.6607, -1.81],
    ['2021', 60.8295, 9.28]
  ]);

  var options = {

      title: 'Rice Exports',

    bars: 'horizontal',
    vAxis: {format: 'decimal'},
    height: 400,
    colors: ['#1b9e77', '#d95f02', '#7570b3'],
    responsive: true
  };

  var chart = new google.visualization.BarChart(document.getElementById('bar_graph'));

  function resizeChart() {
    chart.draw(data, options);
  }

  window.addEventListener('resize', resizeChart);

	chart.draw(data, options);
  
}

function drawBarChart2() {
  var data = google.visualization.arrayToDataTable([
      ['Year', 'Value (Ten million USD)', 'Value Growth (%)'],
      ['2012', 42.4024149, 10.65],
      ['2013', 17.2313179, -59.36],
      ['2014', 44.6219858, 158.95],
      ['2015', 46.4729106, 4.14],
      ['2016', 21.0671995, -54.66],
      ['2017', 35.7721288, 69.80],
      ['2018', 73.6649473, 105.92],
      ['2019', 114.4672197, 55.38],
      ['2020', 92.1840531, -19.46],
      ['2021', 119.6907052, 29.83]
    ]);
  
    var options = {
      
      title: 'Rice Imports',
      bars: 'vertical',
      vAxis: {format: 'decimal'},
      height: 400,
      colors: ['#1b9e77', '#d95f02', '#7570b3'],
      responsive: true,
    };
  
    var chart = new google.visualization.BarChart(document.getElementById('bar_graph2'));

    function resizeChart() {
      chart.draw(data, options);
    }
  
    window.addEventListener('resize', resizeChart);

	  chart.draw(data, options);
  }

  
