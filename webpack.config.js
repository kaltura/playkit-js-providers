'use strict';

const webpack = require("webpack");
const path = require("path");
const PROD = (process.env.NODE_ENV === 'production');
const packageData = require("./package.json");

let plugins = [
  new webpack.DefinePlugin({
    __VERSION__: JSON.stringify(packageData.version),
    __NAME__: JSON.stringify(packageData.name),
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
  })
];

if (PROD) {
  plugins.push(new webpack.optimize.UglifyJsPlugin({sourceMap: true}));
}

module.exports = {
  context: __dirname + "/src",
  entry: PROD ? {
    "ovpProvider.min": "k-provider/ovp/ovp-provider.js",
    "ottProvider.min": "k-provider/ott/ott-provider.js",
    "statsService.min": "k-provider/ovp/services/stats-service.js"
  } : {
    "ovpProvider": "k-provider/ovp/ovp-provider.js",
    "ottProvider": "k-provider/ott/ott-provider.js",
    "statsService": "k-provider/ovp/services/stats-service.js"
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: '[name].js',
    library: "PlaykitJsProviders",
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
