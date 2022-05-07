const News = require('../services/news.service');

//get list
    exports.get_list_news = function(req,res){
        News.get_all(function(data){
            res.send({result:data});
        });
        
    }
    exports.get_list_news_by_create_at = function(req,res){
        News.get_all_by_create(function(data){
            res.send({result:data});
        });
        
    }
    // get detail
    exports.get_detail = function(req,res){
        News.getById(req.params.id, function(respnse){
            res.send({result:respnse});
        });
        
    }   
    // add
    //lấy dữ liệu từ form để add
    //cài body_parser
    exports.add_news = function (req,res){
        var data = req.body;   
        News.create(data,function(respnse){
            res.send({result:respnse});
        });
    } 
    //delete
    exports.delete_news = function(req,res){
    var id = req.params.id;
    //callback
    News.remove(id,function(respnse){
        res.send({result:respnse});
    });
    }
    //put (update gioongs add can data)
    exports.update_news = function(req,res){
    var data = req.body;   
    News.update(data,function(respnse){
        res.send({result:respnse});
    });
    }