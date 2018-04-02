/**
 * Created by liumingyu on 2018/3/28.
 */
/***
 * stream  主要大数据文件数理
 */
var fs = require("fs");
var rs = fs.createReadStream("./1.mp4");
var ws = fs.createWriteStream("./2.mp4");
////循环触发   每次读取64k
//var count = 0;
//rs.on("data", (chunk)=>{
//    //console.log(chunk);
//    count++;
//    console.log(count);
//    ws.write(chunk,(err)=>{
//        if(err){
//            console.error(err);
//        }else {
//            console.log("本次拷贝成功");
//        }
//    });
//});
//rs.on("end",()=>{
//    console.log("数据读取结束");
//});

rs.pipi(ws);