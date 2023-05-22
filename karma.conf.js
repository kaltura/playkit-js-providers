const webpackConfig = require('./webpack.config')('development', {mode: 'development'});
delete webpackConfig.entry;
delete webpackConfig.externals;
delete webpackConfig.output;
delete webpackConfig.devServer;
webpackConfig.devtool = 'inline-source-map';

module.exports = function (config) {
  config.set({
    frameworks: ['webpack', 'mocha'],
    files: [
      {
        pattern: 'test/setup/karma.js',
        watched: false
      }
    ],
    exclude: [],
    preprocessors: {
      'test/setup/karma.js': ['webpack', 'sourcemap']
    },
    reporters: ['mocha'],
    coverageIstanbulReporter: {
      reports: ['lcov', 'text-summary'],
      fixWebpackSourcePaths: true
    },
    webpack: webpackConfig,
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['ChromeHeadless'],
    singleRun: true,
    concurrency: Infinity,

    client: {
      mocha: {
        reporter: 'html',
        timeout: 50000
      }
    }
  });
};
