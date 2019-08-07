const path = require("path");
const htmlPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const dist = "dist";
const workboxPlugin = require("workbox-webpack-plugin");

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
    }),
    new workboxPlugin.InjectManifest({
      swSrc: "./src/sw.js",
      swDest: "sw.js"
    })
    /*
    new workboxPlugin.GenerateSW({
      swDest: "sw.js"
      clientsClaim: true,
      skipWaiting: true,
      runtimeCaching: [
        {
          urlPattern: new RegExp("https://hacker-news.firebaseio.com"),
          handler: "StaleWhileRevalidate"
        }
      ]
    })*/
  ]
};
