google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

		function drawChart() {
			var data = google.visualization.arrayToDataTable([
				['Rice', 'Percentage from the total imports'],
				['Indica rice', 73.14],
				['Japonica rice', 15.05],
				['Aromatic rice',  11.81]
			]);

			var options = {
				title: 'Rice Import',
				is3D: true,
				responsive: true
			};

			var chart = new google.visualization.PieChart(document.getElementById('piechart_3ds'));
			
			function resizeChart() {
				chart.draw(data, options);
			  }
			
			  window.addEventListener('resize', resizeChart);
			  
			  chart.draw(data, options);
			
		}