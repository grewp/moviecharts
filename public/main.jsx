var React = require('react');
var ReactDOM = require('react-dom');
var BarChart = require('react-d3-basic').BarChart;
var mysql = require('mysql');
// var request = require('request');


//setup chart config
var width = 700,
  height = 400,
  title = 'Bar Chart',
  chartSeries = [
    {
      field: 'gross'
    }
  ],
  x = function (d) {
    return d.title;
  },
  xScale = 'ordinal',
  xLabel = 'Movie',
  yLabel = 'Gross',
  yTicks = [1, '$'];


//debug: dummy data
var data = [
  {
    title: 'Moana',
    gross: 2.2
  },
  {
    title: 'Next Movie',
    gross: 1.0
  },
  {
    title: 'Thrid Movie',
    gross: .6
  }
];




// var getData = function () {
//   request('/data', function (error, response, html) {
//       if (!error && response.statusCode == 200) {
//           console.log(response);
//           console.log(html);
//         };
//       }
//     );
// };

document.addEventListener('DOMContentLoaded', function() {
  console.log('hello')
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
