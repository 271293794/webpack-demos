const $ = require('jquery')

export function isArray(sum){ // 转化字符串

   let isTrue = $.isArray(sum)
   console.log('是否是数字：' + isTrue)
}


export function isFunction(sum){
    let isTrue = $.isFunction(sum)
    console.log('是否是函数：' + isTrue)
}
