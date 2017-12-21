
/**
 * 异步处理
 */

// module.exports = function(source) {
//   let callback = this.async()
//    setTimeout(() => {
//        console.log(this.resourceQuery)
//        console.log(this.loaderIndex)
//        console.log(this.resourcePath)
//        console.log(this.loaders)
//        console.log(this.resource)
//       return callback(null,source)
//    },1000)
// };


/**
 * 同步处理
 */

module.exports = function(source){
    return source
 }