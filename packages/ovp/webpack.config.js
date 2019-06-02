const webpackConfig = require('../../webpack.config');

const entryName = 'ovp-provider';
const libraryName = 'ovp';
const dirPath = '/packages/ovp';

module.exports = webpackConfig(entryName, libraryName, dirPath);
