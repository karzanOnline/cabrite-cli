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
    'antd/dist/antd.less',
    'whatwg-fetch'
];

const theme = require('./theme.js');

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
            test: /\.less/,
            loader:ExtractTextPlugin.extract(
                'css?sourceMap!' +
                'postcss!' +
                `less-loader?{"sourceMap":true,"modifyVars":${JSON.stringify(theme)}}`
            )
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