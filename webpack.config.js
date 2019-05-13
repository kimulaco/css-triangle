const path = require('path')

module.exports = [
  // Library bundles
  {
    mode: 'production',
    target: 'node',
    entry: './src/lib/css-triangle.ts',
    output: {
      library: 'CssTriangle',
      libraryTarget: 'umd',
      filename: 'css-triangle.js',
      path: path.join(__dirname, 'lib')
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: [
            'ts-loader',
            'eslint-loader'
          ],
          exclude: /(node_modules|test)/
        }
      ]
    },
    resolve: {
      extensions: [
        '.ts',
        '.js'
      ]
    }
  },

  // Page bundles
  {
    mode: 'development',
    entry: './src/docs/app.ts',
    output: {
      libraryTarget: 'var',
      path: path.resolve(__dirname, 'docs'),
      filename: 'app.js'
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: [
            'ts-loader',
            'eslint-loader'
          ],
          exclude: /(node_modules|test)/
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
]
