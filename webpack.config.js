const webpack = require("webpack");
const path = require('path');

const APP_DIR = path.resolve(__dirname, "src");

module.exports = {
  entry: path.resolve(APP_DIR, "ip-cidr.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js"
  },

  module: {
    rules: [
      {
        test: /\.js/, 
        loader: "babel-loader",
        include: APP_DIR, 
        query: { 
            presets: ["env"] 
        }
      }
    ]
  }
};
