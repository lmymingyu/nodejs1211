/**
 * Created by liumingyu on 2018/3/28.
 */
//fs处理文件的组件   读写文件
var fs = require("fs");

//异步
//fs.readFile("./1.txt", "utf-8", (err, data)=>{
//    console.log(err);
//    console.log(data);
//});
//console.log("结束");

//同步

var data = fs.readFileSync("./1.txt","utf-8");//阻塞
console.log(data);
