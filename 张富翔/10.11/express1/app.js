var express=require('express');
var app=express();

// app.get("/ab?c",function(req,res){
//     res.send("访问成功");
// })
//
// app.get("/hc+d",function(req,res){
//     res.send("HCD");
// })
//
// app.get('/pq*qp', function(req, res) {
//     res.send('qp*pq');
// });
//
// app.get('/AB(cd)?e', function(req, res) {
//     res.send('AB(cd)?e');
// });



//路由句柄
// app.get("/",function(req,res,next){
//     console.log("第一个函数");
//     next();
// },function(req,res,next){
//     console.log("第二个函数");
//     next();
// },function(req,res){
//     console.log("第三个函数");
//     res.send("Hello!");
// })


//数组
// var aa = function (req, res, next) {
//     console.log('aa');
//     next();
// }
//
// var bb = function (req, res, next) {
//     console.log('bb');
//     next();
// }
//
// var cc = function (req, res) {
//     res.send('Hello!');
// }
//
// app.get('/', [aa, bb, cc]);


//混合

var aa = function (req, res, next) {
    console.log('aa');
    next();
}

var bb = function (req, res, next) {
    console.log('bb');
    next();
}

app.get('/', [aa, bb], function (req, res, next) {
    console.log('啦啦啦拉拉啦啦啦');
    next();
}, function (req, res) {
    res.send('Hello');
});



var server = app.listen(3000,'localhost',function () {
    console.log('Example app listening at http://%s:%s',server.address().address,server.address().port);
});