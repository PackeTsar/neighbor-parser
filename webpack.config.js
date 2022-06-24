const path = require('path')

const config = {
  entry: './src/index.js',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist/static/neighbors/'),
    filename: 'bundle.js'
  }
}

module.exports = config
