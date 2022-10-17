window.onload = function() {

var chart = new CanvasJS.Chart("chartContainer1", {
	animationEnabled: true,
	title: {
		text: "Top 5 Products:"
	},
	data: [{
		type: "pie",
		startAngle: 240,
		yValueFormatString: "##0.00\"%\"",
		indexLabel: "{label} {y}",
		dataPoints: [
			{y: 79.45, label: "Product 1"},
			{y: 7.31, label: "Product 2"},
			{y: 7.06, label: "Product 3"},
			{y: 4.91, label: "Product 4"},
			{y: 1.26, label: "Product 5"}
		]
	}]
});
chart.render();

}


anychart.onDocumentReady(function() {
    var data = [
        {x: "Vendor 1", value: 79.45},
        {x: "Vendor 2", value: 7.31},
        {x: "Vendor 3", value: 7.06},
        {x: "Vendor 4", value: 4.91},
        {x: "Vendor 5", value: 1.25},
            


    ];
  
    var chart = anychart.pie();
  
    chart.title("Top 5 Vendors");
  
    chart.data(data);
  
    chart.container('container');
    chart.draw();
  
  });
  
  google.charts.load('current', {packages: ['corechart', 'line']});
  google.charts.setOnLoadCallback(drawAxisTickColors);
  
  function drawAxisTickColors() {
        var data = new google.visualization.DataTable();
        data.addColumn('number', 'X');
        data.addColumn('number', 'This Month');
        data.addColumn('number', 'Last Month');
  
        data.addRows([
          [0, 0, 0],    [1, 10, 5],   [2, 23, 15],  [3, 17, 9],   [4, 18, 10],  [5, 9, 5],
          [6, 11, 3],   [7, 27, 19],  [8, 33, 25],  [9, 40, 32],  [10, 32, 24], [11, 35, 27],
          [12, 30, 22], [13, 40, 32], [14, 42, 34], [15, 47, 39], [16, 44, 36], [17, 48, 40],
          [18, 52, 44], [19, 54, 46], [20, 42, 34], [21, 55, 47], [22, 56, 48], [23, 57, 49],
          [24, 60, 52], [25, 50, 42], [26, 52, 44], [27, 51, 43], [28, 49, 41], [29, 53, 45],
          [30, 55, 47], [31, 60, 52], [32, 61, 53], [33, 59, 51], [34, 62, 54], [35, 65, 57],
          [36, 62, 54], [37, 58, 50], [38, 55, 47], [39, 61, 53], [40, 64, 56], [41, 65, 57],
          [42, 63, 55], [43, 66, 58], [44, 67, 59], [45, 69, 61], [46, 69, 61], [47, 70, 62],
          [48, 72, 64], [49, 68, 60], [50, 66, 58], [51, 65, 57], [52, 67, 59], [53, 70, 62],
          [54, 71, 63], [55, 72, 64], [56, 73, 65], [57, 75, 67], [58, 70, 62], [59, 68, 60],
          [60, 64, 56], [61, 60, 52], [62, 65, 57], [63, 67, 59], [64, 68, 60], [65, 69, 61],
          [66, 70, 62], [67, 72, 64], [68, 75, 67], [69, 80, 72]
        ]);
  
        var options = {
          title:'Revenue of last two months',
          hAxis: {
            title: 'Month',
            textStyle: {
              color: '#01579b',
              fontSize: 14,
              fontName: 'Arial',
              bold: true,
              italic: true
            },
            titleTextStyle: {
              color: '#01579b',
              fontSize: 16,
              fontName: 'Arial',
              bold: true,
              italic: true
            }
          },
          vAxis: {
            title: 'Revenue',
            textStyle: {
              color: '#1a237e',
              fontSize: 14,
              bold: true
            },
            titleTextStyle: {
              color: '#1a237e',
              fontSize: 16,
              bold: true
            }
          },
          colors: ['#a52714', '#097138']
        };
        var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }
  