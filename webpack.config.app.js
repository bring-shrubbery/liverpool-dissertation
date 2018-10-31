let path = require('path');
// let webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/app/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'signals-app-bundle.js'
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },{
                test: /\.scss$/,
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS, using Node Sass by default
                ]
            },{
            //     test: /(\.jsx|\.js)$/,
            //     exclude: /node_modules/,
            //     use: {
            //         loader: "eslint-loader"
            //     }
            // },{
              test: /\.html$/,
              use: [
                {
                  loader: "html-loader"
                }
              ]
            }
        ]
    },
    // eslint: {
    //     failOnWarning: false,
    //     failOnError: true
    // },
    plugins: [
        new CleanWebpackPlugin(['build']),
        new HtmlWebpackPlugin({
            title: "Signals.js App Test Page",
            template: "./src/app/index.html",
            inject: true
        })
    ]
}