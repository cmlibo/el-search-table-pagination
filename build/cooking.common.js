var cooking = require('cooking');
var config = require('./config');

cooking.set({
  entry: './src/index.js',
  dist: './lib',
  clean: false,
  format: 'cjs',
  extends: ['vue2'],
  minimize: false,
  alias: config.alias,
  externals: config.externals
});

cooking.add('output.filename', 'el-search-table-pagination.common.js');
cooking.add('loader.js.exclude', config.jsexclude);
// cooking.add('loader.js', {
//   exclude: config.jsexclude,
//   loader: 'babel-loader',
//   options:{
//     presets:["es2015"]
//   },
// });
cooking.add('loader.scss', {
  test: /\.scss$/,
  loaders: ['style-loader', 'css-loader', 'sass-loader']
});
cooking.add('vue.preserveWhitespace', false);
module.exports = cooking.resolve();
