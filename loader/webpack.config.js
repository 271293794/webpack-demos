const path = require('path');


module.exports = {
    entry:{
        index:'./src/index.js',
    },
    output:{
        filename:'[name].build.js',
        path: path.resolve(__dirname,'./dist')
    },
    module:{
        rules:[{
           test:/\.js$/, use:'template-test-loader'
        }]
    }
}