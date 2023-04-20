google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Rice Export and Imports', 'Rice Percentage'],
    ['Export', 8],
    ['Import', 8],
  ]);

  var options = {
    title: '',
    is3D: true,
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);
}
