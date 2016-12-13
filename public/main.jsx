var React = require('react');
var ReactDOM = require('react-dom');
var BarChart = require('react-d3-basic').BarChart;
var mysql = require("mysql");


//debug: dummy data
var data = [
	{
		title: "Moana",
		gross: 2.2
	},
	{
		title: "Next Movie",
		gross: 1.0
	},
		{
		title: "Thrid Movie",
		gross: .6
	}

];



//setup chart config
  var width = 700,
    height = 400,
    title = "Bar Chart",
    chartSeries = [
      {
        field: 'gross'
      }
    ],
    x = function(d) {
      return d.title;
    },
    xScale = 'ordinal',
    xLabel = "Movie",
    yLabel = "Gross",
    yTicks = [1, "$"];


// var getData = function () {
//   //login credentials
//   var con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "mrspooky6",
//     database: "197final"
//   });

//   //establish connection
//   con.connect(function(err){
//     if(err){
//       console.log('Error connecting to Db');
//       return;
//     }
//     console.log('Connection established');
//   });

//   //query data
//   con.query('SELECT * FROM 12_12_BO',function(err,rows){
//     if(err) throw err;

//     console.log('Data received from Db:\n');
//     console.log(rows[0].title);
//   });

//   //terminate connection
//   con.end(function(err) {
//   });
// };


document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render(
    <BarChart
      title= {title}
      data= {data}
      width= {width}
      height= {height}
      chartSeries = {chartSeries}
      x= {x}
      xLabel= {xLabel}
      xScale= {xScale}
      yTicks= {yTicks}
      yLabel = {yLabel}
    />
    , document.getElementById('container')
  );
});
