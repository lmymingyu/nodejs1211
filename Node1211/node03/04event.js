/**
 * Created by liumingyu on 2018/3/28.
 */
/***
 * 事件
 * 又称订阅者模式
 * 又称观察者模式
 * 当主体对象发生变化时,会通知所有观察者对象,更新自己的行为
 */
//var event = require("events").EventEmitter();
var event = require("events");//引入事件模块
var util = require("util");
function Girl(){
    //创建一个女神类
}
//一个类要想具有事件方法,需要继承自event模块
util.inherits(Girl, event);

function Boy(name, response){
    this.name = name;
    this.response = response;//事件方法
}
var boy1 = new Boy("张三", ()=>{
    console.log("买包");
});
var boy2 = new Boy("小李", ()=>{
    console.log("给张卡随便刷");
});

var girl = new Girl();

//注册事件
girl.on("unhappy", boy1.response);
girl.on("unhappy", boy2.response);
girl.on("unhappy", boy1.response);
//girl.addListener("unhappy", boy2.response);

//删除事件  移除单个
//girl.removeListener("unhappy",boy1.response);
//删除所有
girl.removeAllListeners("unhappy");

//只会被触发一次的事件
girl.once("die", ()=>{
    console.log("女神挂了,备胎找新的女神");
});
girl.removeAllListeners("die");
//发射事件
girl.emit("unhappy");
girl.emit("unhappy");
girl.emit("die");
girl.emit("die");