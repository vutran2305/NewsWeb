const News = require('../services/news.service');
const PAGE_SIZE =4;
//get list
    exports.get_list_news = function(req,res){
        // var page =parseInt(req.query.page )|| 1;
        // var star = (page -1)* PAGE_SIZE;
        // var end = page * PAGE_SIZE;
        News.get_all(function(data){
            res.send({result:data});
        });
        
    }
    exports.get_list_news_by_create_at = function(req,res){
        var page =parseInt(req.query.page )|| 1;
        var star = (page -1)* PAGE_SIZE;
        var end = page * PAGE_SIZE;
        News.get_all_by_create(req.params.id,function(respnse,total){
            if (respnse != null) {
                res.send({result:respnse.slice(star,end),total});
            }
            else {
                res.send({result:respnse});
            }
        });
        
    }
    // search
    exports.search = function (req,res){
        var page =parseInt(req.query.page )|| 1;
        var star = (page -1)* PAGE_SIZE;
        var end = page * PAGE_SIZE;
        News.get_by_newsTitle(req.body.News_Tiltle,function(respnse,total){
            if (respnse != null) {
                res.send({result:respnse.slice(star,end),total});
            }
            else
            {
                res.send({result:respnse});
            }
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
    // get listNewByTopicId
    exports.getListNewByTopic = function(req,res){
        var page =parseInt(req.query.page )|| 1;
        var star = (page -1)* PAGE_SIZE;
        var end = page * PAGE_SIZE;
        News.getByTopicId(req.params.id, function(respnse,total){
            if (respnse != null) {
            res.send({result:respnse.slice(star,end), total});
            }
            else {
                res.send({result:respnse})
            }
        });
    } 