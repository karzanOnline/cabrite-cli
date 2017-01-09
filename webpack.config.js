/**
 * Created by caozheng on 2016/12/22.
 */
const path = require('path');
const node_modules = path.resolve(__dirname, 'node_modules');
const webpack = require('webpack');
const CommonsChunkPlugin = require(path.resolve(node_modules, 'webpack/lib/optimize/CommonsChunkPlugin'));
const DllReferencePlugin = webpack.DllReferencePlugin;
const project = require('./package.json');
const entries = require(path.resolve(__dirname, 'entry.config.js'));
const entries_key = Object.keys(entries);
const publicPath = 'http://localhost:80/';

let config = {
    entry:require(path.resolve(__dirname, 'entry.config.js')),
    output:{
        publicPath,
        path: './',
        filename: 'dist/js/[name].js',
        chunkFilename: 'chunk/[chunkhash:8].chunk.js',
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },
    module:{
        loaders:[
            {
                test:/\.(js|jsx)?$/,
                loader:'babel-loader'
            },
            {
                test:/\.(tsx|ts)/,
                loader: 'ts-loader',
                query: {
                    plugins:[
                        ['import',[{ libraryName: "antd", style: "css"}]],
                    ],
                    cacheDirectory: true
                }
            },
            {
                test:/\.(less)?$/,
                loader:'style!css!less'
            },
            {
                test:/\.css?$/,
                loader:'style!css'
            },
            {
                test:/\.(jpg|png|gif|jpeg)?$/,
                loader:'url-loader?limit=20480&name=dist/images/[name].[hash:8].[ext]'
            },
            {
                test:/\.(eot|woff(2)?|ttf|svg)?(@.+)*$/,
                loader:'url-loader?limit=20480&name=dist/other/[name].[hash:8].[ext]'
            }
        ],
        devtool: 'eval',
        noParse: ['react', 'co', 'react-router'],
    },
    plugins:[
        new DllReferencePlugin({
            context: __dirname,
            manifest: require('./manifest.json'),
        }),
        new CommonsChunkPlugin({
            name:"common",
            filename:"dist/common.js",
            minChunks:2,
            chunks:entries_key
        })
    ]
};
module.exports = config;