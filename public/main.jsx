var React = require('react');
var ReactDOM = require('react-dom');
var FullApp = require('./components/FullApp.jsx');

var fullApp = <FullApp/>;

document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(
      fullApp
      , document.getElementById('container')
    );
});
