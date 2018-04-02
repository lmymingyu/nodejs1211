/**
 * Created by liumingyu on 2018/3/29.
 */
var http = require("http");
var url = require("url");
var fs = require("fs");
var formidable = require("formidable");
http.createServer((req, res)=>{
    //获取请求地址
    var urlStr = req.url;
    //获取请求方式   get post
    var urlmethod = req.method;
    var urlObj = url.parse(urlStr, true);
    //console.log(urlObj);
    //index.hml .htl .hm .h ,html
    if(urlObj.pathname == "/" || urlObj.pathname == "/index.html"){
        //返回index.html数据
        //读取html数据
        var rs = fs.createReadStream("./index.html");
        //将数据赋值给res
        rs.pipe(res);
    }else if(urlObj.pathname == "/formApi"){
        //var args = "";
        //req.on("data",(chunk)=>{
        //    args += chunk;
        //});
        //req.on("end",()=>{
        //    console.log("读取完成");
        //    console.log(args);
        //    res.end(args);
        //});

        //res.end(JSON.stringify(urlObj));
        //推荐使用方法
        var form = new formidable.IncomingForm();
        //错误   参数  文件
        form.parse(req,(err,args,files)=>{
            if(err){
                console.error(err);
            }else {
                console.log(args);
                console.log(files);
                //读取缓存图片
                fs.createReadStream(files.fileId.path).
                pipe(fs.createWriteStream("./upload/" + files.fileId.name));
            }

        });
        res.end();
    }else if(urlObj.pathname == "/ajaxApi"){
        var date = new Date();
        res.end(date.toString());
    }else if(urlObj.pathname != "/favicon.ico"){
        fs.createReadStream("." + urlObj.pathname).pipe(res);
    }


}).listen(8080);