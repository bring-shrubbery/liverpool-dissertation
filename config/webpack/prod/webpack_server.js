const path = require('path');
const nodeExternals = require('webpack-node-externals');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const babel_config = require('../../babel/babel_config.json');

module.exports = {
    mode: 'production',
    target: 'node',
    entry: './src/server/index.js',
    output: {
        path: path.resolve(__dirname, '../../../build'),
        filename: 'server.js',
        publicPath: '/',
        libraryTarget: 'commonjs2'
    },
    externals: [
        nodeExternals()
    ],
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    node: {
        // Need this when working with express, otherwise the build fails
        __dirname: false, // if you don't put this is, __dirname
        __filename: false, // and __filename return blank or /
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            exclude: /node_modules/,
            use: {
                loader: 'ts-loader',
                options: {
                    configFile: path.resolve(__dirname, '../../typescript/prod.tsconfig.json')
                }
            }
        }, {
            test: /(\.jsx?)$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    ...babel_config
                }
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
        new CleanWebpackPlugin("build", { verbose: false })
    ],
    optimization: {
        minimizer: [new UglifyJsPlugin()],
    }
}