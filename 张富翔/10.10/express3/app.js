var express = require('express');
var app = express();

app.use(express.static('static'));
app.use(express.static('uploads'))


var server = app.listen(3000,'localhost',function () {
    console.log('Example app listening at http://%s:%s',server.address().address,server.address().port);
});