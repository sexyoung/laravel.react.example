var WebpackDevServer = require("webpack-dev-server");
var webpack = require("webpack");
var config = require("./webpack.config.js");

var server = new WebpackDevServer(webpack(config), {
	publicPath: config.output.publicPath,
	hot: true,
	noInfo: false,
	stats: {colors: true},
	proxy: {
		"/api/*": "http://localhost:8000/"
	}
});

server.listen(8080, "localhost", function(err) {
  if (err) {
    console.log(err);
  }

  console.log("Listening at http://localhost:8080...");
});