'use strict';

const clone = require('clone');
const webpack = require('webpack');
const path = require('path');
const PROD = process.env.NODE_ENV === 'production';

let CrudeTimingPlugin = function() {};

CrudeTimingPlugin.prototype.apply = function(compiler) {
  compiler.plugin('compilation', (compilation) => {
    let startOptimizePhase;

    compilation.plugin('optimize-chunk-assets', (chunks, callback) => {
      // Cruddy way of measuring minification time. UglifyJSPlugin does all
      // its work in this phase of compilation so we time the duration of
      // the entire phase
      startOptimizePhase = Date.now();

      // For async phases: don't forget to invoke the callback
      callback();
    });

    compilation.plugin('after-optimize-chunk-assets', () => {
      const optimizePhaseDuration = Date.now() - startOptimizePhase;
      console.log(`optimize-chunk-asset phase duration: ${optimizePhaseDuration}`);
    });
  });
};

function getPlugins(dirPath) {
  const packageData = require(__dirname + dirPath + '/package.json');
  const plugins = [
    new webpack.DefinePlugin({
      __VERSION__: JSON.stringify(packageData.version),
      __NAME__: JSON.stringify(packageData.name)
    }),
    new CrudeTimingPlugin()
  ];

  if (PROD) {
    plugins.push(new webpack.optimize.UglifyJsPlugin({sourceMap: true}));
  }
  return plugins;
}
const baseConfig = (entryName, libraryName, dirPath) => ({

  context: __dirname + dirPath,
  entry: {[entryName]: __dirname + dirPath + '/src/index.js'},
  output: {
    path: __dirname + dirPath + '/dist',
    filename: '[name].js',
    library: ['playkit', 'providers', libraryName],
    libraryTarget: 'umd',
    devtoolModuleFilenameTemplate: './playkit/providers/' + libraryName + '/[resource-path]'
  },
  devtool: 'source-map',
  plugins: getPlugins(dirPath),
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader'
          }
        ],
        exclude: [/node_modules/]
      },
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        enforce: 'pre',
        use: [
          {
            loader: 'eslint-loader',
            options: {
              rules: {
                semi: 0
              }
            }
          }
        ]
      }
    ]
  },
  devServer: {
    contentBase: __dirname + dirPath + '/src'
  },
  resolve: {
    modules: [path.resolve(__dirname, dirPath), 'node_modules']
  }
});

module.exports = baseConfig;
