const path = require('path');

module.exports = {
	entry: { // 入口
		'index': './src/index.js'
	},
    output: { // 出口
    	path: path.join(__dirname,'build'),
    	filename: 'index.build.js'
    },
    module: { // 加载器
    	rules: [
           {
	           	test:/\.js$/,
	            exclude: /(node_modules|bower_components)/, 
	            // 防止将node_modules中或bower_components的js 转码
	            use:[
	                {
		                loader: 'babel-loader',
		                options: {
		                    presets: ['es2015']
		                }
		            }, 
	            ]
           }
    	]
    }
  
}