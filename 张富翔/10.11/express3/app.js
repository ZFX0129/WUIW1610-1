var express=require('express');
var app=express();
var fs=require("fs");

app.use(function(re,req,next){
    var t=new Date()
    .toLocaleTimeString();
        fs.appendFile('./log.txt',t+"\n",function(err){
            if(err) throw err;
        })
    next();
})

app.get('/',function(req,res){
    res.send('首页');
})
app.get('/list',function(req,res){
    res.send('列表');
})
app.get('/show',function(req,res){
    res.send('详情');
})


var server = app.listen(3000,'localhost',function () {
    console.log('Example app listening at http://%s:%s',server.address().address,server.address().port);
});
