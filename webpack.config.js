'use strict';

const clone = require('clone');
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

const baseConfig = {
  context: __dirname + "/src",
  entry: {},
  output: {
    path: path.join(__dirname, "dist"),
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

const providersConfig = clone(baseConfig);
const servicesConfig = clone(baseConfig);

Object.assign(providersConfig.entry, {
  "ott": "k-provider/ott/index.js",
  "ovp": "k-provider/ovp/index.js"
});

Object.assign(providersConfig.output, {
  filename: "playkit-[name]-provider.js",
  library: ["playkit", "providers", "[name]"]
});

Object.assign(servicesConfig.entry, {
  "analytics": "k-provider/ovp/services/analytics/index.js",
  "stats": "k-provider/ovp/services/stats/index.js",
  "bookmark": "k-provider/ott/services/bookmark/index.js"
});

Object.assign(servicesConfig.output, {
  filename: "playkit-[name]-service.js",
  library: ["playkit", "services", "[name]"]
});

module.exports = [providersConfig, servicesConfig];
