google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

		function drawChart() {
			var data = google.visualization.arrayToDataTable([
				['Rice', 'Percentage from the total area'],
				['NSIC Rc222', 13.8],
				['NSIC Rc160', 6.5],
				['NSIC Rc18',  5.4],
				['PSB Rc82', 4.7],
				['NSIC Rc214', 4.1],
                ['Other rice varieties', 65.5]
			]);

			var options = {
				title: 'Top commercial rice varieties in the Philippines in the last ten years (2011-2020)',
				is3D: true,
				responsive: true
			};

			var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
			
			function resizeChart() {
				chart.draw(data, options);
			  }
			
			  window.addEventListener('resize', resizeChart);
			  
			  chart.draw(data, options);
			
		}