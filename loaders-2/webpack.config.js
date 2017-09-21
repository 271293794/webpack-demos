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
	         test: /\.css$/,
	         use: [
	           'style-loader',
	           'css-loader'
	         ]
	       },
           {
		     test:/\.less$/,
		     use:["style-loader",'css-loader','less-loader']
		   }
    	]
    }
  
}