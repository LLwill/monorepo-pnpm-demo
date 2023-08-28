const path = require('path');

module.exports = {
  entry: './index.tsx',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
};