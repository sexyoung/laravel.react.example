import React from "react";
import { Router, Route, IndexRoute} from "react-router";

import Hello from "./Hello";
import About from "./About";

require('../sass/app.scss');

var App = React.createClass({

	render: function() {
		return (
      <div>
        {this.props.children}
      </div>
		);
	}

});


React.render(
	<Router>
		<Route path="/" component={App}>
				<IndexRoute component={Hello} />
				<Route path="about" component={About} />
		</Route>
	</Router>
, document.getElementById("content"));