function TestPlugin(options){

}


TestPlugin.prototype.apply = function(compiler){

    compiler.plugin('emit',function(compilation,callback){
        console.log(compilation.fileTimestamps)
        // compilation.modules（数组） 包含所有个模块
        compilation.chunks.forEach(function(chunk){
            // console.log(chunk)
            /**
             * modules
             * chunk.files 包含每个模块的名字（也可从compilation 中访问这些资源）
             */ 
        })
        compilation.modules.forEach(function(module){
            /**
             * module.fileDependencies 一个存放模块中包含的源文件路径的数组
             */ 
            // console.log(module.fileDependencies)
        })
        

        callback()
    })
}


module.exports = TestPlugin;