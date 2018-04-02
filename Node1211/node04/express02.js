/**
 * Created by liumingyu on 2018/3/29.
 */
/**
 * 中间件
 * */
var express = require("express");
var app = express();


/**
 * 中间件:
 * 1.每个中间件都可以控制流程是否继续执行
 * 2.每个中间件中的req和res都是同一个对象
 * 3.如果出错,转交给错误处理中间件
 * 4.一个中间处理完数据,可以把响应传递给下一个中间件继续处理
 *
 * */
//朝廷拨款赈灾 每个发100两
app.use((req,res,next)=>{
    req.money = 100;
    next();
});
//知府
app.use((req,res,next)=>{
    req.money -= 20;
    //console.log("知府把钱全扣了");
    next("钱丢了");
});
//县衙门
app.use((req,res,next)=>{
    req.money -= 50;
    next();
});
//报错处理中间件
app.use((err,req,res,next)=>{
    console.error(err);
    res.send(err);
});
//真正响应发钱的请求
app.all("*",(req,res)=>{
    console.log("发钱");
    res.send("每人发:" + req.money);
});

app.listen(8080);