/**
 * Created by caozheng on 2016/12/22.
 */
var path = require('path');
var node_modules = path.resolve(__dirname, 'node_modules');
var CommonsChunkPlugin = require(path.resolve(node_modules, 'webpack/lib/optimize/CommonsChunkPlugin'));
var project = require('./package.json');
var entries = require(path.resolve(__dirname, 'entry.config.js'));
var entries_key = Object.keys(entries);
var publicPath = 'http://localhost:9090/';
require('./env')('product');

var config = {
    entry:require(path.resolve(__dirname, 'entry.config.js')),
    output:{
        publicPath: publicPath,
        path: './',
        filename: 'dist/js/[name].js',
        chunkFilename: 'chunk/[chunkhash:8].chunk.js',
    },
    module:{
        loaders:[
            {
                test:/\.(js|jsx)?$/,
                loader:'babel'
            },
            {
                test:/\.(scss|sass)?$/,
                loader:'style!css!sass'
            },
            {
                test:/\.css?$/,
                loader:'style!css'
            },
            {
                test:/\.(jpg|png|gif|jpeg)?$/,
                loader:'url?limit=20480&name=dist/images/[name].[hash:8].[ext]'
            },
            {
                test:/\.(eot|woff(2)?|ttf|svg)?(@.+)*$/,
                loader:'url?limit=20480&name=dist/other/[name].[hash:8].[ext]'
            }
        ]
    },
    plugins:[
        new CommonsChunkPlugin({
            name:"common",
            filename:"dist/common.js",
            minChunks:3,
            chunks:entries_key
        })
    ]
};
module.exports = config;