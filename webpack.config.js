var webpack = require('webpack')
var path  = require('path')

var BUILD_DIR = path.resolve(__dirname, 'scroll/static/scroll/js')
var APP_DIR = path.resolve(__dirname, 'scroll/assets/js')

var config = {
    entry : APP_DIR + '/app.js',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.jsx?/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['env','react'],
                plugins: ['transform-class-properties']
            }
        }]
    }
};

module.exports = config;