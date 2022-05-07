const Comment = require('../services/comment.services');

//get list
    exports.get_list_comment = function(req,res){
        Comment.get_all(function(data){
            res.send({result:data});
        });
        
    }
    // get detail
    exports.get_detail = function(req,res){
        Comment.getById(req.params.id, function(respnse){
            res.send({result:respnse});
        });
        
    }   
    // add
    //lấy dữ liệu từ form để add
    //cài body_parser
    exports.add_comment = function (req,res){
        var data = req.body;   
        Comment.create(data,function(respnse){
            res.send({result:respnse});
        });
    } 
    //delete
    exports.delete_comment = function(req,res){
    var id = req.params.id;
    //callback
    Comment.remove(id,function(respnse){
        res.send({result:respnse});
    });
    }
    //put (update gioongs add can data)
    exports.update_comment = function(req,res){
    var data = req.body;   
    Comment.update(data,function(respnse){
        res.send({result:respnse});
    });
    }