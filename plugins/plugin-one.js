
function FileListPlugin(options) {}
/**
 * 这里主要尝试webpack的一些钩子函数。更多的钩子函数见
 * http://www.css88.com/doc/webpack2/api/plugins/
 */ 

FileListPlugin.prototype.apply = function(compiler) {
  
  compiler.plugin('after-plugins',function(){
    console.log('从选项对象中提取的所有插件都被添加到编译器中: after-emit')
  })
  compiler.plugin('after-resolvers',function(){
    console.log('所有从选项对象中提取的插件都被添加到解析器中: after-resolvers')
  })
    //编译器开始编译。这用于normal和watch模式。插件可以使用这一点来修改params对象（即装饰工厂）。
  compiler.plugin('make',function(compilation,callback){
        console.log('开始编译: make')
        callback()
  })
  compiler.plugin('compile',function(params){
   
    console.log('编译中: compile')
  })
  compiler.plugin('after-compile',function(compilation,callback){
    console.log('编译完成: after-compile')
    callback()
  })
  compiler.plugin('emit', function(compilation, callback) { 
     console.log('准备输出编译文件：emit')
     callback()
  })

  compiler.plugin('after-emit',function(compilation,callback){
    console.log('以输出编译文件: after-emit')
    callback()
  })
 
  compiler.plugin('failed',function(err){
    console.log('编译器处于监视模式，编译失败: failed')
    console.log(err)
  })
  compiler.plugin('invalid',function(){
    console.log('编译器处于监视模式，并检测到文件更改。编译将很快开始: invalid')
  })

  compiler.plugin('done',function(state){
    console.log('一切都完成了: done, 状态：'+state)
  })

  compiler.plugin('run',function(compilation,callback){
      console.log('编译器开始编译: run') // 在watch 模式下不可用
      callback()
  })

  compiler.plugin('compilation',function(compilation,params){
    console.log(compilation) // 在watch 模式下不可用
    compilation.plugin('after-optimize-chunk-assets', function(chunks) {
      //  console.log(chunks)
    })
})
};

module.exports = FileListPlugin;    
