// webpack.config.js

var path = require('path');
var webpack = require("webpack");

module.exports = {
    context: __dirname,
    entry: [
        "./resources/assets/javascripts/entry.js",
        "webpack-dev-server/client?http://localhost:8080",
        "webpack/hot/dev-server"
    ],
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, loaders: ["react-hot", "babel"], exclude: /node_modules/},
            {
              test: /\.scss$/,
              loader: "style!css!sass?outputStyle=expanded&imagePath=/assets/images&includePaths[]=" +
              path.resolve(__dirname, "./assets/stylesheets")
            }
        ]
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
};
