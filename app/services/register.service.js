const db = require("../common/connect");
var Register = function (register) {
  // this.User_Id = register.User_Id;
  this.userId = register.userId;
  this.username = register.username;
  // this.Name = register.Name;
  // this.Email = register.Email;
  // this.Phone = register.Phone;
  // this.UserName= register.UserName;
  this.password = register.password;
  this.name = register.name;
  this.create_at = register.create_at;
  // this.User_Permision= register.User_Permision;
  // console.log("check: " ,register);
};
// console.log("Check Register", Register)
//post

Register.create = function (data, result) {
  console.log("check data:", data);
  db.query("INSERT INTO user SET ?", data, function (err, register) {
    if (err) {
      result("Insert thất bại");
    } else {
      // result({User_Id: register.InsertUser_Id, ...data})
      // result({userId: register.Inser})
      result({ userId: register.userId, ...data });
    }
  });
};

module.exports = Register;
