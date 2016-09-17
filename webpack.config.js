var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/public/dist');
var APP_DIR = path.resolve(__dirname, 'src/app');

var config = {
    context: __dirname + '/src/app',
    entry: {
        javascript: './index.jsx',
        html: "./index.html",
    },
    output: {
        path: __dirname + "/dist",
        filename: 'bundle.js'
    },
    module : {
        loaders : [
            {
                test: /\.html$/,
                loader: "file?name=[name].[ext]",
            },
            {
                test : /\.jsx?/,
                include : APP_DIR,
                exclude: /node_modules/,
                loaders : ['react-hot','babel']
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.png$/,
                loader: "url-loader?limit=100000"
            },
            {
                test: /\.jpg$/,
                loader: "file-loader"
            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=application/octet-stream'
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file'
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=image/svg+xml'
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            }
        ]
    }
};

module.exports = config;
