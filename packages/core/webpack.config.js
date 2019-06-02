const webpackConfig = require('../../webpack.config');

const entryName = 'core-provider';
const libraryName = 'core';
const dirPath = '/packages/core';

module.exports = webpackConfig(entryName, libraryName, dirPath);
