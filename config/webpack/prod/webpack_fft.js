let path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

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
            test: /(\.jsx?)$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        }]
    },
    optimization: {
        minimizer: [new UglifyJsPlugin()],
    }
}

module.exports = editorConfig