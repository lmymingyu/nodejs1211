/**
 * Created by liumingyu on 2018/3/30.
 */
//引入mongoose
var mongoose = require("mongoose");
//var url = "mongodb://127.0.0.1:27017/Node1211";
//var db = mongoose.createConnection(url);
//连接数据库,默认连接到test
//var db = mongoose.connect("mongodb://127.0.0.1:27017/Node1211");
////监听报错事件
//db.connection.on("error",(err)=>{
//    console.error("连接失败:" + err);
//});
////监听数据库开启
//db.connection.on("open", ()=>{
//    console.log("数据库连接成功");
//});
//db.Connection();
//断开连接
//db.on("disconnected",function (err) {
//    console.error("连接失败,错误是:" + err);
//});
//db.on("connected", function () {
//    console.log("连接成功");
//});

var url = "mongodb://127.0.0.1:27017/Node1211";
var db = mongoose.connect(url,(err)=>{
    if(err){
        console.error("连接失败:" + err);
    }else {
        console.log("连接成功");
    }
});
//schema: 一种以文件形式存储的数据模型骨架
var schema = new mongoose.Schema({
    name:{type:String},
    age :{type:Number,default:0}
},{
    collection:"person"
});

//model :由schema构造生成的数据模型
var Model = mongoose.model("person",schema);
//修改
Model.update({name:"吴显毅"},{$set:{age:25}},
    {multi:true},(err)=>{
        if(err){
            console.error(err);
        }else {
            console.log("更新成功");
        }
});






