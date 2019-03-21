let path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const babel_config = require('../../../babel.config');

const editorConfig = {
    mode: 'production',
    entry: './src/fft/fft.js',
    output: {
        path: path.resolve(__dirname, '../../../build/public/'),
        filename: './static/fft.js',
        library: 'FFT',
        libraryTarget: 'var',
        globalObject: 'FFT'
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    ...babel_config
                }
            }
        }]
    },
    optimization: {
        minimizer: [new UglifyJsPlugin()],
    }
}

module.exports = editorConfig