'use strict';

const webpack = require("webpack");
const path = require("path");
const PROD = (process.env.NODE_ENV === 'production');
const packageData = require("./package.json");

let plugins = [
  new webpack.DefinePlugin({
    __VERSION__: JSON.stringify(packageData.version),
    __NAME__: JSON.stringify(packageData.name)
  })
];

if (PROD) {
  plugins.push(new webpack.optimize.UglifyJsPlugin({sourceMap: true}));
}

module.exports = {
  context: __dirname + "/src",
  entry: {
    "playkit-ott-provider": "k-provider/ott/index.js",
    "playkit-ovp-provider": "k-provider/ovp/index.js",
    "playkit-stats-service": "k-provider/ovp/services/stats/index.js",
    "playkit-bookmark-service": "k-provider/ott/services/bookmark/index.js"
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: '[name].js',
    library: "PlaykitProviders",
    libraryTarget: 'umd',
    devtoolModuleFilenameTemplate: "./providers/[resource-path]",
  },
  devtool: 'source-map',
  plugins: plugins,
  module: {
    rules: [{
      test: /\.js$/,
      use: [{
        loader: "babel-loader"
      }],
      exclude: [
        /node_modules/
      ]
    }, {
      test: /\.js$/,
      exclude: [
        /node_modules/
      ],
      enforce: 'pre',
      use: [{
        loader: 'eslint-loader',
        options: {
          rules: {
            semi: 0
          }
        }
      }]
    }]
  },
  devServer: {
    contentBase: __dirname + "/src"
  },
  resolve: {
    modules: [
      path.resolve(__dirname, "src"),
      "node_modules"
    ]
  }
};
