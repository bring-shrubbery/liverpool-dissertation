const path = require('path');
const babel_config = require('../../babel/babel_config.json');

const editorConfig = {
    mode: 'development',
    entry: './src/fft/fft.js',
    output: {
        path: path.resolve(__dirname, '../../../build/public/'),
        filename: './static/fft.js',
        library: 'FFT',
        libraryTarget: 'var',
        globalObject: 'FFT'
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    ...babel_config
                }
            }
        }]
    },
    stats: {
        all: false,
        warnings: true,
        errors: true
    }
}

module.exports = editorConfig