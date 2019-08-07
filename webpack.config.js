const path = require("path");
const htmlPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const dist = "dist";

module.exports = {
  mode: "development",
  entry: {
    index: "./src/app.js"
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, dist)
  },
  plugins: [
    new CleanWebpackPlugin(),
    new htmlPlugin({
      template: "src/index.ejs",
      filename: "index.html",
      title: "Get Started With Workbox For Webpack"
    })
  ]
};
