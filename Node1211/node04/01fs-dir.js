/**
 * Created by liumingyu on 2018/3/29.
 */
/**
 * rwx   r: 4   w:2   x;1
 * 所有者   用户组  其他  chmod
 * */
var fs = require("fs");
//mkdir 创建目录
// 目录名  mode: 设置读写执行权限  回调
//fs.mkdir("test","0777", (err)=>{
//    if(err){
//        console.error(err);
//    }else {
//        console.log("创建成功");
//    }
//});

//读取目录
//fs.readdir("test", (err, files)=>{
//    if(err){
//        console.error(err);
//    }else {
//        console.log(files);
//    }
//});
//目录详情
//fs.stat("test",(err, files)=>{
//    if(err){
//        console.error(err);
//    }else {
//        console.log(files)
//    }
//});
//判断某个文件是否存在
fs.exists("test/2.txt",(bol)=>{
    if(bol){
        console.log("存在");
    }else {
        console.log("不存在");
    }
});

//改名
fs.rename("1.txt","2.txt",(err)=>{
    if(err){
        console.error(err);
    }else {
        console.log("修改成功");
    }
});




