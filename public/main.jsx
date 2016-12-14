var React = require('react');
var ReactDOM = require('react-dom');
var BarChart = require('react-d3-basic').BarChart;
var mysql = require('mysql');


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


var getData = function (cb) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    cb(JSON.parse(this.response));
    // if (this.readyState == 4 && this.status == 200) {
    //  document.getElementById("demo").innerHTML = this.responseText;
    // }
  };
  xhttp.open('GET', 'http://localhost:3000/data', false);
  xhttp.send();
};

document.addEventListener('DOMContentLoaded', function () {
  getData(function (resp) {
    ReactDOM.render(
      <BarChart
        title= {title}
        data= {resp}
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
});