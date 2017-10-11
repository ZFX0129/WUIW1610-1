var express=require('express');
var app=express();

app.use(function(req,res,next){
    req.money=10000;
    console.log('中央')
    next();
})

app.use(function(req,res,next){
    req.money=req.money-4000;
    console.log('省里')
    next();
})

app.use(function(req,res,next){
    req.money=req.money-2000;
    console.log('市里')
    next();
})

app.use(function(req,res,next){
    req.money=req.money-1000;
    console.log('县里')
    next();
})

app.use(function(req,res,next){
    req.money=req.money-2000;
    console.log('乡里')
    next();
})

app.use(function(req,res,next){
    req.money=req.money-500;
    console.log('村里')
    next();
})

app.get('/',function(req,res){
    res.send(req.money+"");
});



var server = app.listen(3000,'localhost',function () {
    console.log('Example app listening at http://%s:%s',server.address().address,server.address().port);
});
