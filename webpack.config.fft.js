let path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
// const WebpackShellPlugin = require('webpack-shell-plugin');

const editorConfig = {
    mode: 'production',
    entry: './src/fft/fft.js',
    output: {
        path: path.resolve(__dirname, 'build/public/'),
        filename: './static/fft.js',
        library: 'FFT',
        libraryTarget: 'var',
        globalObject: 'FFT'
    }
}

module.exports = editorConfig