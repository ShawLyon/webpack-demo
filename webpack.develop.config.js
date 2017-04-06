

var path = require('path');
module.exports = {
  //单页面SPA 的入口文件
  entry: path.resolve(__dirname,'src/js/app.js'),
  //出口文件
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:'bundle.js'
  }
};
