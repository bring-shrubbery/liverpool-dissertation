let path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const babel_config = require('../../../babel.config');

const projectsConfig = {
    mode: 'development',
    target: 'web',
    entry: {
        projects: './src/projectManager/index.js'
    },
    output: {
        path: path.resolve(__dirname, '../../../build/public/'),
        filename: './static/signals-[name]-bundle.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './build'
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
        }, {
            test: /\.scss$/,
            use: [
                "style-loader", // creates style nodes from JS strings
                "css-loader", // translates CSS into CommonJS
                "sass-loader" // compiles Sass to CSS, using Node Sass by default
            ]
        }, {
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
            template: "./src/projectManager/index.html",
            filename: "projects.html",
            chunks: ["projects"],
            inject: false // injecting happens on the server
        })
    ],
    // resolve: {
    //     alias: {
    //         "react": "preact-compat",
    //         "react-dom": "preact-compat"
    //     }
    // },
    stats: {
        all: false,
        warnings: true,
        errors: true
    }
}

module.exports = projectsConfig;