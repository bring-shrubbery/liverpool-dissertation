let path = require('path');
// let webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: './website/index.js',
        blog: './website/blog.js'
    }, output: {
        path: path.resolve(__dirname, 'website/build'),
        filename: '[name].bundle.js'
    },
    devtool: 'inline-source-map',
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
                test: /\.css$/,
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader" // translates CSS into CommonJS
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
        new CleanWebpackPlugin(['./website/build']),
        new HtmlWebpackPlugin({
            title: "Signals.js",
            template: "./website/index.html",
            filename: "index.html",
            chunks: ['index'],
            inject: true
        }),
        new HtmlWebpackPlugin({
            title: "Blog",
            template: "./website/index.html",
            filename: "blog.html",
            chunks: ['blog'],
            inject: true
        })
    ]
}