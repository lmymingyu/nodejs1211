/**
 * Created by liumingyu on 2018/3/29.
 */
/**
 * 路径处理
 * */
var path = require("path");
var str = "./a/b/../d/y/u/../../../q";
//规范化路径
console.log(path.normalize(str));
//获取当前路径
console.log(__dirname);
//连接路径
console.log(path.join(__dirname,str,"m"));
