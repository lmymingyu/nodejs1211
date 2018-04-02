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
//查找 全部
//Model.find({},(err,doc)=>{
//    if(err){
//        console.error(err);
//    }else {
//        console.log(doc);
//    }
//});
//单挑查询   找到第一个满足条件的数据
//Model.findOne({name:"吴显毅"},(err,doc)=>{
//    if(err){
//        console.error(err);
//    }else {
//        console.log(doc);
//    }
//});

//id查找
//Model.findById("5abdffa31caa24378d539486",(err,doc)=>{
//    if(err){
//        console.error(err);
//    }else {
//        console.log(doc);
//    }
//});

//大于  大于等于 gte  小于lt 小于等于lte 不等于ne
//Model.find({age:{$gt:18}},(err,doc)=>{
//    if(err){
//        console.error(err);
//    }else {
//        console.log(doc);
//    }
//});
//或者
//Model.find({$or:[{age:{$lte:18}},
//    {age:{$gte:25}}]},(err,doc)=>{
//    if(err){
//        console.error(err);
//    }else {
//        console.log(doc);
//    }
//});
//摸个字段是否存在查找   显示包含__v字段的数据
//Model.find({"__v":{$exists:true}},(err,doc)=>{
//    if(err){
//        console.error(err);
//    }else {
//        console.log(doc);
//    }
//});
//limit  限制
//Model.find({},null,{limit:3},(err,doc)=>{
//    if(err){
//        console.error(err);
//    }else {
//        console.log(doc);
//    }
//});
//skip 跳过
//Model.find({},null,{skip:2},(err,doc)=>{
//    if(err){
//        console.error(err);
//    }else {
//        console.log(doc);
//    }
//});
//skip 和limit
//Model.find({},null,{skip:2,limit:2},(err,doc)=>{
//    if(err){
//        console.error(err);
//    }else {
//        console.log(doc);
//    }
//});
//排序  1升序  -1降序
Model.find({},null,{sort:{age:-1}},(err,doc)=>{
    if(err){
        console.error(err);
    }else {
        console.log(doc);
    }
});







