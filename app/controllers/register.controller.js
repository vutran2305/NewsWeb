const Register = require('../services/register.service');
 
    // add
    //lấy dữ liệu từ form để add
    //cài body_parser
    exports.add_user = function (req,res){
        var data = req.body;   
        Register.create(data,function(respnse){
            res.send({result:respnse});
        });
    } 
   