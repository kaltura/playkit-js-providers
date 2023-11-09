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
    webpack: webpackConfig,
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    // browsers: ['Chrome', 'Safari', 'Firefox'],
    customLaunchers: {
      ChromeHeadlessWithFlags: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox', '--autoplay-policy=no-user-gesture-required', '--mute-audio', '--max-web-media-player-count=1000']
      }
    },
    browsers: ['ChromeHeadlessWithFlags'],
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
