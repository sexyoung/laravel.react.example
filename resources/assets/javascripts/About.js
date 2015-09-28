var React = require('react');

var About = React.createClass({

	render: function() {
		console.warn("我在 about!");
		return (
			<div>
				About Page <br/>
				<a href="/#/">link to hello</a>
			</div>
		);
	}

});

module.exports = About;
