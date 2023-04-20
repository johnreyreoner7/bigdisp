google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawChart);

window.onresize = drawChart;

function drawChart() {
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
    chart: {
      title: 'Rice Exports and Imports',
      subtitle: 'Imports',
    },

    bars: 'vertical',
    vAxis: {format: 'decimal'},
    height: 400,
    colors: ['#1b9e77', '#d95f02', '#7570b3']
  };

  var chart = new google.charts.Bar(document.getElementById('bar_graph2'));
  chart.draw(data, google.charts.Bar.convertOptions(options));
}


