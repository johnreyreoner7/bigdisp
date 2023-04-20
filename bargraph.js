google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawChart);

window.onresize = drawChart;

function drawChart() {
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
    chart: {
      title: 'Rice Exports and Imports',
      subtitle: 'Exports',
    },

    bars: 'vertical',
    vAxis: {format: 'decimal'},
    height: 400,
    colors: ['#1b9e77', '#d95f02', '#7570b3']
  };

  var chart = new google.charts.Bar(document.getElementById('bar_graph'));
  chart.draw(data, google.charts.Bar.convertOptions(options));
  
}


