var React = require('react');
var ReactDOM = require('react-dom');
var MovieChart = require('./components/MovieChart.jsx');

var movieChart = <MovieChart/>;

document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render(
    movieChart
    , document.getElementById('container')
  );
});
