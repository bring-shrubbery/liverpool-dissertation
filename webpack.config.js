const path = require('path');
const nodeExternals = require('webpack-node-externals');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const editorConfig = require('./webpack.config.editor');

module.exports = [
    {
        mode: 'development',
        target: 'node',
        entry: './src/server/index.js',
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: 'server.js',
            publicPath: '/',
            libraryTarget: 'commonjs2'
        },
        externals: [
            nodeExternals()
        ],
        node: {
            // Need this when working with express, otherwise the build fails
            __dirname: false,   // if you don't put this is, __dirname
            __filename: false,  // and __filename return blank or /
        },
        module: {
            rules: [{
                test: /(\.jsx?)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }, {
                test: /\.s?css$/,
                exclude: /node_modules/,
                use: {
                    loader: "css-loader/locals"
                }
            }, {
                test: /\.html/,
                exclude: /node_modules/,
                use: {
                    loader: "file-loader"
                }
            }]
        },
        plugins: [
            new CleanWebpackPlugin("build")
        ]
    },
    editorConfig
]