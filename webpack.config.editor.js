let path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin');

const editorConfig = {
    mode: 'development',
    target: 'web',
    entry: {
        editor: './src/editor/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'build/public/editor'),
        filename: 'signals-editor-bundle.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './build'
    },
    module: {
        rules: [{
            test: /(\.jsx?)$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        }, {
            test: /\.scss$/,
            use: [
                "style-loader", // creates style nodes from JS strings
                "css-loader", // translates CSS into CommonJS
                "sass-loader" // compiles Sass to CSS, using Node Sass by default
            ]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Editor Test Page",
            template: "./src/editor/index.html",
            filename: "editor.html",
            chunks: ["editor"],
            inject: false
        })
    ]
}

module.exports = editorConfig