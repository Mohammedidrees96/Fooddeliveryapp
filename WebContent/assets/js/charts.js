

// var chart1 = document.getElementById("linechart");
var chart2 = document.getElementById('barchart');
// var chart3 = document.getElementById("piechart");
// var chart4 = document.getElementById("doughnutchart");
// var chart5 = document.getElementById("stackedbarchart");
// var chart6 = document.getElementById("radarchart");

var myChart2 = new Chart(chart2, {
    type: 'bar',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'Income',
            backgroundColor: "rgba(54, 162, 235, 0.5)",
            borderColor: "rgb(54, 162, 235)",
            borderWidth: 1,
            data: ["20", "30", "40", "50", "60", "70", "80"],
        }, {
            label: 'Expenses',
            backgroundColor: "rgba(244, 67, 54, 0.5)",
            borderColor: "rgb(255, 99, 132)",
            borderWidth: 1,
            data: ["5", "15", "25", "35", "45", "35", "25"],
        }]
    },
    options: {
        responsive: true,
        title: { display: false, text: 'Chart' },
        legend: { position: 'top', display: true, },
        tooltips: { mode: 'index', intersect: false, },
        hover: { mode: 'nearest', intersect: true },
        scales: {
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Months'
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Revenue'
                }
            }]
        }
    }
});
