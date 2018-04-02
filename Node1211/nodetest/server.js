/**
 * Created by liumingyu on 2018/4/1.
 */
var express = require("express");
var formidable = require("formidable");
var app = express();
//map
var arr = {
    "1":2,
    "2":4,
    "3":5,
    "4":100
};
app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/activate.html");//绝对路径
});
app.get("/lotto",(req,res)=>{
    var form = new formidable.IncomingForm();
    //错误   参数  文件
    form.parse(req,(err,args,files)=>{
        if(err){
            console.error(err);
        }else {
            console.log(args);
            var index = get_rand(arr);
            var obj = {
                err:0,
                index:Number(index)
            };
            res.send(obj);
        }
    });
});
app.post("/login",(req,res)=>{
    res.send("/lotto.html");//绝对路径
});

function get_rand(proArr) {
    var result = '';
    //概率数组的总概率精度
    var proSum = 0;
    for(var item in proArr){
        proSum += proArr[item];
    }
    console.log(proSum);
    var result = 0;
    ////概率数组循环
    for(var item in proArr){
        var randNum = Math.floor(Math.random()* proSum);
        if(randNum <= proArr[item]){
            result = item;
            break;
        }else {
            proSum -= proArr[item];
        }
    }
    return result;
}


app.all("*",(req,res)=>{
    //console.log(req.path);
    res.sendFile(__dirname + req.path);
});
//设置端口号
app.listen(8080);