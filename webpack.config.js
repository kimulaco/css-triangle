const path = require('path')

module.exports = {
  mode: 'production',
  target: 'node',
  entry: './src/css-triangle.ts',
  output: {
    library: 'CssTriangle',
    libraryTarget: 'umd',
    filename: 'css-triangle.js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          'ts-loader',
          'eslint-loader'
        ],
        exclude: /(node_modules|dist|test)/
      }
    ]
  },
  resolve: {
    extensions: [
      '.ts',
      '.js'
    ]
  }
}
