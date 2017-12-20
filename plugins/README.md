
# webpack 插件(3.10.0)

![webxiaoma](https://webxiaoma.github.io/other/manong.jpg)


 ```javascript
 npm install

 npm start (或者 webpack)
 ```

 # 相关知识库

 - [如何编写一个插件](http://www.css88.com/doc/webpack/development/how-to-write-a-plugin/)

 - [了解webpack内部的钩子](http://www.css88.com/doc/webpack2/api/plugins/)

 - [有用的插件模式](http://www.css88.com/doc/webpack/development/plugin-patterns/)



# 文件说明

```js
--build  // 文件输出目录
--src 
  -- index.js    //入口文件
--pluinn-one.js  //webpack内部钩子的练习
--plugin-two.js  //有用的插件模式练习
--plugin-three.js // 一个简单的插件
--webpack.config.js // webpack配置文件
```

`plugin-three.js` 就我们练习的一个小插件，当我们引入该文件，并当做插件使用时，我们编译出来的文件开头都自动加上一个备注，(类似于 // The comment was created by the  webxiaoma Wed Dec 20 2017 15:31:23 GMT+0800 (中国标准时间)), 并且`plugin-three.js`插件的配置项只有一个 `fileList`, 默认为`false`,如果设置为`true`,则在编译后生成`file-list`, 里面包含编译的清单