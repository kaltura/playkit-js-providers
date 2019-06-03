const webpackConfig = require('../../webpack.config');

const entryName = 'ott-provider';
const libraryName = 'ott';
const dirPath = '/packages/ott';

const bookmarkEntryName = 'bookmark';
const bookmarkLibraryName = 'bookmark';
const bookmarkConfig = webpackConfig(bookmarkEntryName, bookmarkLibraryName, dirPath);
bookmarkConfig.entry = {[bookmarkEntryName]: __dirname + '/src/services/bookmark/index.js'};
bookmarkConfig.output.path += '/services';

module.exports = [
  webpackConfig(entryName, libraryName, dirPath),
  bookmarkConfig
];
