/**
 * Created by liumingyu on 2018/3/29.
 */
/**
 * 框架
 * 1.路由
 * 2.中间件
 * 3.模板引擎
 * */
//引入模块
var express = require("express");
//初始化
var app = express();

//get(path,cb)
app.get("/",(req,res)=>{
    //res.send()
    //res.send("express请求");
    res.sendFile(__dirname + "/index.html");//绝对路径
});

app.get("/ajaxApi",(req,res)=>{
    var date = new Date();
    res.send(date.toString());
});

app.get("/query",(req,res)=>{
    console.log(req.query.name);
    console.log(req.query);
});
app.get("/article/:id/:name",(req,res)=>{
    //console.log(req.query);
    console.log(req.params);//使用路径参数
});
app.post("/formApi",(req,res)=>{
    console.log(req.query);//query 解析不了post
    //formidable
    res.send();
});

//任何方式请求   *任意路径  没有匹配路由 就进入all
app.all("*",(req,res)=>{
    //console.log(req.path);
    res.sendFile(__dirname + req.path);
});


//设置端口号
app.listen(8080);