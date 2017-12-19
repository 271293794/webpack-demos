const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');


module.exports = {
    entry:{
        index:'./src/index',
        vendor:[
            'jquery'
        ]
    },
    output:{
        filename:'[name].[chunkhash:5].js',
        path: path.resolve(__dirname,"./dist")
    },
    plugins:[
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title:'缓存测试'
        }),

        // vendor 和 runtime顺序不能颠倒
        // new webpack.optimize.CommonsChunkPlugin({
        //     name:'vendor'
        // }),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name:'runtime'
        // }),

        new webpack.optimize.CommonsChunkPlugin({
           names:['vendor','runtime']
        }),
    ]
}
