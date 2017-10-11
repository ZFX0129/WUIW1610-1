var express=require('express');
var app=express();

//路由模块
var home=require("./routes/home");
var news=require("./routes/news");
var product=require("./routes/product");


app.use("/",home);
app.use("/news",news);
app.use("/product",product);


var server = app.listen(3000,'localhost',function () {
    console.log('Example app listening at http://%s:%s',server.address().address,server.address().port);
});