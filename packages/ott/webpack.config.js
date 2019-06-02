const webpackConfig = require('../../webpack.config');

const entryName = 'ott-provider';
const libraryName = 'ott';
const dirPath = '/packages/ott';

module.exports = webpackConfig(entryName, libraryName, dirPath);
