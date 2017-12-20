
const PluginOne = require('./plugin-one'); // 主要测试一些钩子函数

const PluginTwo = require('./plugin-two');

// 编写插件的一个例子
const PluginThree = require('./plugin-three');


module.exports = {
    entry:{
        index:'./src/index.js'
    },
    output:{
        path: __dirname + '/build',
        filename:'[name].js',
    },
    plugins:[
    //   new PluginOne(),
    //   new PluginTwo(),
     new PluginThree({fileList:true}) // 没有fileList 默认为false,如果为false则不生成清单文件file-list.md
    ]
}