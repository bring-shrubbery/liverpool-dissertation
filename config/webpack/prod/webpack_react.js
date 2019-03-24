let path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const babel_config = require('../../../babel.config');

const editorConfig = {
    mode: 'production',
    target: 'web',
    entry: {
        editor: './src/editor/index.js'
    },
    output: {
        path: path.resolve(__dirname, '../../../build/public/'),
        filename: './static/signals-[name]-bundle.js'
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
            enforce: "pre",
            test: /\.js$/,
            exclude: /node_modules/,
            use: [{
                loader: 'eslint-loader',
                options: {
                    configFile: path.resolve(__dirname, "../../eslint/eslint_react.json")
                }
            }]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/editor/index.html",
            filename: "editor.html",
            chunks: ["editor"],
            inject: false // injecting happens on the server
        })
    ],
    optimization: {
        minimizer: [new UglifyJsPlugin()],
    }
}

module.exports = editorConfig