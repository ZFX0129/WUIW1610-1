var express = require('express');
var app = express();

// app.get('/', function (req, res) {
//     res.send('首页');
// });
// app.get('/list', function (req, res) {
//     res.send('列表');
// });
// app.get('/category', function (req, res) {
//     res.send('栏目');
// });


app.get("/",function(req,res){
    res.send("put 访问首页");
})


var server = app.listen(3000,'localhost',function () {
    console.log('Example app listening at http://%s:%s',server.address().address,server.address().port);
});