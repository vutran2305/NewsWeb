var express = require ('express');
var app = express() ;


//cấu hình body-parser
var body_parser = require('body-parser');
app.use(body_parser.urlencoded({extend:false}));
app.use(body_parser.json());

require('./app/routes/news.router')(app);
require('./app/routes/topic.router')(app);
require('./app/routes/comment.router')(app);
require('./app/routes/reply_comment')(app);

app.post('/login',function(req,res){
    if(req.body.username=='vutran2305'&& req.body.password=='12345'){
        res.json('đăng nhập thành công');
    }
    else{
        res.send('Đăng nhập thất bại'); 
    }
});

//listen on port 3000 
app.listen(4000,function () {
    console.log("Server listenning on http://localhost:4000");
})