const webpack = require('webpack');
const path = require('path');
const packageData = require('./package.json');

const plugins = [
  new webpack.DefinePlugin({
    __VERSION__: JSON.stringify(packageData.version),
    __NAME__: JSON.stringify(packageData.name)
  })
];

module.exports = (env, {mode}) => {
  return {
    entry: {
      ovp: './src/k-provider/ovp/index.ts',
      ott: './src/k-provider/ott/index.ts',
      analytics: './src/k-provider/ovp/services/analytics/index.ts',
      bookmark: './src/k-provider/ott/services/bookmark/index.ts',
      stats: './src/k-provider/ovp/services/stats/index.ts'
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: pathData =>
        pathData.chunk.name === 'ovp' || pathData.chunk.name === 'ott' ? 'playkit-[name]-provider.js' : 'playkit-[name]-service.js',
      libraryTarget: 'umd',
      clean: true
    },
    resolve: {
      extensions: ['.ts', '.js'],
    },
    devtool: mode === 'development' ? 'eval-source-map' : 'source-map',
    plugins: plugins,
    module: {
      rules: [
        {
          test: /\.(ts|js)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    bugfixes: true,
                  }
                ],
                '@babel/preset-typescript'
              ],
              plugins: [['@babel/plugin-transform-runtime']]
            }
          }
        },
      ]
    },
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist')
      },
      compress: true
    }
  }
};
