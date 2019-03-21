let path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const babel_config = require('../babel.config');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = [{
    mode: 'production',
    entry: {
        index: './docs_dev/index.js',
        blog: './docs_dev/blog.js'
    },
    output: {
        path: path.resolve(__dirname, '../docs'),
        filename: 'signals-[name]-bundle.js'
    },
    module: {
        rules: [{
            test: /(\.jsx?)$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    ...babel_config
                }
            }
        }, {
            test: /\.scss$/,
            use: [
                "style-loader", // creates style nodes from JS strings
                "css-loader", // translates CSS into CommonJS
                "sass-loader" // compiles Sass to CSS, using Node Sass by default
            ]
        }, {
            test: /\.css$/,
            use: [
                "style-loader", // creates style nodes from JS strings
                "css-loader", // translates CSS into CommonJS
            ]
        }, {
            test: /\.html/,
            exclude: /node_modules/,
            use: {
                loader: "file-loader"
            }
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./docs_dev/index.html",
            filename: "index.html",
            chunks: ["index"],
            inject: true
        }),
        new HtmlWebpackPlugin({
            template: "./docs_dev/blog.html",
            filename: "blog.html",
            chunks: ["blog"],
            inject: true
        })
    ],
    target: 'web',
    optimization: {
        minimizer: [new UglifyJsPlugin()],
    }

}]