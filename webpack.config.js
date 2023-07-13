const webpack = require('webpack');
const path = require('path');
const packageData = require('./package.json');
const TerserPlugin = require('terser-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

const plugins = [
  new webpack.DefinePlugin({
    __VERSION__: JSON.stringify(packageData.version),
    __NAME__: JSON.stringify(packageData.name)
  })
];

const config = {
  entry: {
    ovp: './src/k-provider/ovp/index.js',
    ott: './src/k-provider/ott/index.js',
    analytics: './src/k-provider/ovp/services/analytics/index.js',
    bookmark: './src/k-provider/ott/services/bookmark/index.js',
    stats: './src/k-provider/ovp/services/stats/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: pathData =>
      pathData.chunk.name === 'ovp' || pathData.chunk.name === 'ott' ? 'playkit-[name]-provider.js' : 'playkit-[name]-service.js',
    libraryTarget: 'umd',
    clean: true
  },
  plugins: plugins,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', {targets: 'defaults'}], '@babel/preset-flow']
          }
        }
      }
    ]
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false
      })
    ]
  }
};

module.exports = () => {
  if (isProduction) {
    config.mode = 'production';
  } else {
    config.mode = 'development';
    config.devtool = 'eval-source-map';
    config.devServer = {
      static: {
        directory: path.join(__dirname, 'dist')
      },
      compress: true
    };
  }
  return config;
};
