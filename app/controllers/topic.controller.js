const Topic = require('../services/topic.service');

//get list
    exports.get_list_topic = function(req,res){
        Topic.get_all(function(data){
            res.send({result:data});
        });
        
    }
    // get detail
    exports.get_detail = function(req,res){
        Topic.getById(req.params.id, function(respnse){
            res.send({result:respnse});
        });
        
    }   
    // add
    //lấy dữ liệu từ form để add
    //cài body_parser
    exports.add_topic = function (req,res){
        var data = req.body;   
        Topic.create(data,function(respnse){
            res.send({result:respnse});
        });
    } 
    //delete
    exports.delete_topic = function(req,res){
    var id = req.params.id;
    //callback
    Topic.remove(id,function(respnse){
        res.send({result:respnse});
    });
    }
    //put (update gioongs add can data)
    exports.update_topic = function(req,res){
    var data = req.body;   
    Topic.update(data,function(respnse){
        res.send({result:respnse});
    });
    }