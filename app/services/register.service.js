const db = require('../common/connect');
var Register = function(register){
    this.User_Id = register.User_Id;
    this.Name = register.Name;
    this.Email = register.Email;
    this.Phone = register.Phone;
    this.UserName= register.UserName;
    this.Password = register.Password;
    this.Create_at = register.Create_at;
    this.User_Permision= register.User_Permision;
}

//post
Register.create = function(data,result){

    db.query("INSERT INTO user SET ?",data,function(err,register){
       
        if(err )
        {
            result("Insert thất bại");
        }
        else
        {
            result({User_Id: register.InsertUser_Id, ...data})
        }
    })
}

module.exports = Register;