var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: {
        'main': path.resolve(__dirname + '/main.js'),
        'vendor': path.resolve(__dirname + '/vendor.js'),
    },
    output: {
        filename: '[name].js',
        publicPath: '/',
        path: path.resolve(__dirname + '/dist'),
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({ name: ['vendor'] })
    ]
}