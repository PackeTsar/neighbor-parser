const path = require('path')

const config = {
  entry: './src/index.js',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: 'bundle.js'
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist/')
    },
    watchFiles: ['*'],
    hot: true
  }
}

module.exports = config
