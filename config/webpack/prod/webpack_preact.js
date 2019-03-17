let path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const babel_config = require('../../babel/babel_config.json');

const projectsConfig = {
    mode: 'production',
    target: 'web',
    entry: {
        projects: './src/projectManager/index.js'
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
    optimization: {
        minimizer: [new UglifyJsPlugin()],
    }
}

module.exports = projectsConfig;