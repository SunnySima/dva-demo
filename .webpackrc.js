const path = require('path');

module.exports = {
  entry: './src/index.js',
  outputPath: path.resolve(__dirname, 'build'),
  env: {
    development: {
      extraBabelPlugins: [
        'dva-hmr'
      ]
    }
  },
  hash: true,
  html: {
    template: './src/index.ejs'
  }
};