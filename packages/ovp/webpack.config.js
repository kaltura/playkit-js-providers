const webpackConfig = require('../../webpack.config');

const entryName = 'ovp-provider';
const libraryName = 'ovp';
const dirPath = '/packages/ovp';

const analyticsEntryName = 'analytics';
const analyticsLibraryName = 'analytics';
const analyticsConfig = webpackConfig(analyticsEntryName, analyticsLibraryName, dirPath);
analyticsConfig.entry = {[analyticsEntryName]: __dirname + '/src/services/analytics/index.js'};
analyticsConfig.output.path += '/services';

module.exports = [
  webpackConfig(entryName, libraryName, dirPath),
  analyticsConfig
];
