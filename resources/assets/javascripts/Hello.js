import $ from "jQuery";

var React = require('react');

var Star = require("./Star");

var Hello = React.createClass({

	getInitialState() {
		return {
			list: []
		};
	},

	componentDidMount: function() {
		$.getJSON('/api/list', (json) => {
				this.setState({
					list: json
				});
		}.bind(this));
	},

	render() {
		console.warn("我在 home!");
		return (
			<div>
				哈囉!
				<Star />
				<a href="/#/about">link to about</a>
				{this.state.list.map(function(msg, i) {
					return (
						<div key={i}>
							{msg.name} <br/>
							{msg.content} <hr/>
						</div>
					);
				})}
			</div>
		);
	}

});

module.exports = Hello;