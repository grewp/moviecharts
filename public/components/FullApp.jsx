var React = require('react');
var BarChart = require('react-d3-basic').BarChart;
var PieChart = require('react-d3-basic').PieChart;


var FullApp = React.createClass({

	getInitialState: function() {
	    return {
	      //using mask as state to keep track of data
	      mask: null
	    };
    },

	width: 700,
	height: 400,
	title:'Bar Chart',
	chartSeries: [
		{
		field: 'gross'
		}
	],
	x: function (d) {
	return d.title;
	},
	xScale: 'ordinal',
	xLabel: 'Movie',
	yLabel: 'Gross',
	yTicks: [1, '$'],

	data: null,

	componentWillMount: function () {
		  var xhttp = new XMLHttpRequest();
		  xhttp.onreadystatechange = function () {
		    if (this.readyState == 4 && this.status == 200) {
		     resp = JSON.parse(this.response);
		     data = resp;
		     mask = resp.map(function () {return true});
		    }
		  };
		  xhttp.open('GET', 'http://localhost:3000/data', false);
		  xhttp.send();

		  //set initial mask state
		  this.setState({mask:mask});
	},

	componentWillUpdate: function () {
		//filter the passed data to reflect changes
		data = resp.filter(function (el) {
			return mask[resp.indexOf(el)]});
	},

	onClicked: function (i) {
		mask[i]=!mask[i]; //change corresponding map value
		this.setState({mask:mask});
		console.log(this.state)
		
		//change color
	},

	render: function () {
		var buttons = []
		for (var i = 0; i < resp.length; i++) {
			buttons.push(<button key={i} onClick={this.onClicked.bind(this, i)} 
				className={this.state.mask[i] ? 'active' : 'inactive'}>{resp[i].title}</button>);
		};

		return (
			<div>
				<div className='graph'>
				  <BarChart
				    title= {this.title}
				    data= {data}
				    width= {this.width}
				    height= {this.height}
				    chartSeries = {this.chartSeries}
				    x= {this.x}
				    xLabel= {this.xLabel}
				    xScale= {this.xScale}
				    yTicks= {this.yTicks}
				    yLabel = {this.yLabel}
				    />
				</div>
				<div className='controls'>
					{buttons}
				</div>
			</div>
	);}
});

module.exports = FullApp;