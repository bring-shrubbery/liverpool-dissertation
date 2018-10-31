let path = require('path');
let webpack = require('webpack');
let constants = require('./src/library/core/constants.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/library/index.js',
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'signals.js',
        library: 'signals',
        libraryTarget: 'var',
        globalObject: 'signals'
    },
    devServer: {
        contentBase: './dist'
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
            // },{
            //     test: /(\.jsx|\.js)$/,
            //     exclude: /node_modules/,
            //     use: {
            //         loader: "eslint-loader"
            //     }
            // },
            // {
            //     test: /\.js$/,
            //     exclude: /node_modules/,
            //     use: ['babel-loader', 'eslint-loader']
            // }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new webpack.DefinePlugin({'c_signals':constants}),
        new HtmlWebpackPlugin({
            title: "Library Test Page",
            inject: true
        })
    ]
// }]
}