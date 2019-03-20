const path = require('path');

module.exports = {
    mode: 'production',
    target: 'node',
    externals: /^(?!^\.\/)/,
    context: path.join(__dirname, 'src'),
    entry: './css-triangle.ts',
    output: {
        path: path.join(__dirname, 'lib'),
        filename: 'css-triangle.js',
        libraryTarget: 'umd'
    },
    resolve: {
        extensions: [
        '.ts',
        '.js'
        ]
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader'
            }
        ]
    }
};
