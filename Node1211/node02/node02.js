/**
 * Created by liumingyu on 2018/3/27.
 */

var http = require("http");//引入模块
var url = require("url");//引入url模块
//url 模块 用于解析url路径和参数
http.createServer((req, res) => {
    // url:
    // '/' 第一个前世请求地址
    // '/' 根目录
    // '?' 后是参数
    // method : get post
    res.write('<head><meta charset="UTF-8"> </head>');
    //解析url  当参数为true时 query解析为对象,默认为false
    var urlObj = url.parse(req.url, true);

    if(urlObj.pathname == "/ajax"){
        console.log(urlObj);
        res.write(JSON.stringify(urlObj.query));
    }
    res.end();//结束请求
}).listen(8080);