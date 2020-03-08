const HtmlWebPackPlugin = require("html-webpack-plugin");

// Initialize Plugins Array
const plugins = [
    new HtmlWebPackPlugin({
      template: "./client/public/index.html",
      filename: "./index.html"
    })
  ]

module.exports = {
    entry: './client/index.js',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
    },
    plugins
};