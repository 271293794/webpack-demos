const path = require('path');

module.exports = {
  mode: 'development',
  module: {
      rules: [
          {
             test: /\.html$/,
             use: {
                 loader: path.resolve(__dirname,'./lib/loader.js')
             }
          }
      ]
  }

};


