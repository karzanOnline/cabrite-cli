/**
 * Created by caozheng on 2017/1/3.
 */
const webpack = require("webpack");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// 公共库列表
const vendors = [
    'react',
    'react-dom',
    'react-router',
    'antd',
    'antd/dist/antd.css'
];

module.exports = {
    entry: {
        bundle: vendors
    },
    output: {
        path: 'build',
        filename: '[name].js',
        library: '[name]_library'
    },
    module: {
        loaders: [{
            test: /\.css/,
            loader:ExtractTextPlugin.extract("style-loader", "css-loader?-url")
        }]
    },
    plugins: [
        new ExtractTextPlugin('[name].dll.css'),
        new webpack.DllPlugin({
            path: 'manifest.json',
            name: '[name]_library',
            context: __dirname,
        })
    ]
};