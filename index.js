var express = require("express");
const cors = require("cors");

var app = express();
const session = require("express-session");
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "news1",
});
app.use(cors({ origin: true }));
//cấu hình body-parser
var body_parser = require("body-parser");
app.use(body_parser.json());
app.use(body_parser.urlencoded({ extend: true }));

app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);

require("./app/routes/news.router")(app);
require("./app/routes/topic.router")(app);
require("./app/routes/comment.router")(app);
require("./app/routes/reply_comment.router")(app);
require("./app/routes/register.router")(app);

// app.post('/login',function(req,res){
//     if(req.body.username=='vutran2305'&& req.body.password=='12345'){
//         res.json('đăng nhập thành công');
//     }
//     else{
//         res.send('Đăng nhập thất bại');
//     }
// });
app.post("/login", function (request, response,Username) {
  // Capture the input fields
  let username = request.body.username;
  let password = request.body.password;
  // Ensure the input fields exists and are not empty
  if (username && password) {
    // Execute SQL query that'll select the account from the database based on the specified username and password
    connection.query(
      "SELECT * FROM user WHERE UserName = ? AND Password = ?",
      [username, password],
      function (error, results, fields) {
        // If there is an issue with the query, output the error
        if (error) throw error;
        // If the account exists
        if (results.length > 0) {
          // Authenticate the user
          request.session.loggedin = true;
          request.session.username = username;
          response.send("Đăng nhập thành công tài khoản"+' '+ username);
          response.send(Username(username));
          return response;
        } else {
          response.send("Username or Password không đúng !");
        }
        response.end(); 
      }
    );
  } else {
    response.send("Vui lòng nhập Username and Password!!!");
    response.end();
  }
});

//listen on port 3000
app.listen(4000, function () {
  console.log("Server listenning on http://localhost:4000");
});
