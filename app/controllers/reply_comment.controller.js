const ReplyComment = require('../services/reply_comment.service');

//get list
    exports.get_list_reply_comment = function(req,res){
        ReplyComment.get_all(function(data){
            res.send({result:data});
        });
        
    }
    // get detail
    exports.get_detail = function(req,res){
        ReplyComment.getById(req.params.id, function(respnse){
            res.send({result:respnse});
        });
        
    }   
    // add
    //lấy dữ liệu từ form để add
    //cài body_parser
    exports.add_reply_comment = function (req,res){
        var data = req.body;   
        ReplyComment.create(data,function(respnse){
            res.send({result:respnse});
        });
    } 
    //delete
    exports.delete_reply_comment = function(req,res){
    var id = req.params.id;
    //callback
    ReplyComment.remove(id,function(respnse){
        res.send({result:respnse});
    });
    }
    //put (update gioongs add can data)
    exports.update_reply_comment = function(req,res){
    var data = req.body;   
    ReplyComment.update(data,function(respnse){
        res.send({result:respnse});
    });
    }