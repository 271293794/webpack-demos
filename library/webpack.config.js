const path = require('path');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
   
    entry:'./src/index.js',
    output:{
        filename:'is-type.js',
        path:path.resolve(__dirname,'./dist'),
        library:'isType',
        libraryTarget: 'umd'
    },
    plugins:[
        // new CleanWebpackPlugin(['dist']),
        // new HtmlWebpackPlugin()
    ],
    externals: {
        "jquery": {
            commonjs: "jQuery",
            commonjs2: "jQuery",
            amd: "jQuery",
            root: "$"
        }
    }

}