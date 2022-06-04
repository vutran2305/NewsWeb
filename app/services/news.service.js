const { all } = require('express/lib/application');
const db = require('../common/connect');

var News = function(news){
    this.News_Id = news.News_Id;
    this.News_Title = news.News_Title;
    this.News_Content = news.News_Content;
    this.News_View = news.News_View;
    this.News_Cmt= news.News_Cmt;
    this.News_Url = news.News_Url;
    this.News_Img_Upload = news.News_Img_Upload;
    this.Topic_Id = news.Topic_Id;
    this.News_Index = news.News_Index;
    this.Created_At = news.Created_At;
    this.Cmt_Id = news.Cmt_Id;
}
News.get_all = function(result){
    db.query("SELECT * FROM news inner join topic on news.Topic_Id =topic.Topic_Id ",function(err,news){
       if(err){
           result("Error");
       }
       else{
            result(news);
       }
   });

}
News.get_top = function(result){
    db.query("SELECT * FROM news WHERE Topic_Id =1 ORDER by News_Id DESC LIMIT 1;SELECT * FROM newss WHERE Topic_Id =2 ORDER by News_Id DESC LIMIT 1;SELECT * FROM newss WHERE Topic_Id =3 ORDER by News_Id DESC LIMIT 1;SELECT * FROM newss WHERE Topic_Id =4 ORDER by News_Id DESC LIMIT 1;SELECT * FROM newss WHERE Topic_Id =5 ORDER by News_Id DESC LIMIT 1;SELECT * FROM newss WHERE Topic_Id =6 ORDER by News_Id DESC LIMIT 1 ",function(err,news){
       if(err){
           result("Error");
       }
       else{
            result(news);
       }
   });

}
News.get_all_by_create = function(id,result){
    db.query("SELECT * FROM news where Created_At =? ",id,function(err,news,total){
        total = news.length;
        if(err || news.length == 0){
            result(null);
        }
        else{
            result(news ,total);
        }
   });

}
News.get_by_newsTitle = function(News_Title,result){

    db.query('Select * From news where News_Title LIKE "%' +News_Title + '%"',function(err,news){
       total = news.length;
        if(err || news.length == 0)
        {
            result("dữ liệu tìm kiếm không tìm thấy");
        }
        else
        {
            result(news , total)
        }
    });
}
News.getById = function(id, result){
    db.query("SELECT * FROM news where News_Id = ?",id,function(err,news){
        if(err || news.length == 0){
            result(null);
        }
       
        else{
            result(news[0]);
        }
    });
   
}
//post
News.create = function(data,result){

    db.query("INSERT INTO news SET ?",data,function(err,news){
       
        if(err )
        {
            result("Insert thất bại");
        }
        else
        {
            result({News_Id: news.InsertNews_ID, ...data})
        }
    })
}
//delete
News.remove = function(News_Id ,result){
    db.query("DELETE from news WHERE News_Id = ?",News_Id,function(err,news){
        if(err ){
            result(null);
        }
       
        else{
            result("xoá dữ liệu news có id "+ News_Id + " thành công");
}
    })
}
News.getByTopicId = function(id, result){
    db.query("SELECT * FROM news where Topic_Id = ? Group By News_Id DESC",id,function(err,news,total){
        total = news.length;
        if(err || news.length == 0){
            result(null);
        }
        else{
            result(news,total);
        }
    });
   
}
//put (gioongs create)
News.update = function(p,result){
    db.query(" UPDATE news SET News_Title =? ,News_Content =? ,News_View = ?,News_Cmt =?,News_Url =?,News_Img_Upload =?,Topic_Id =?,News_Index=? ,Created_At =? WHERE News_Id=?",[p.News_Title,p.News_Content,p.News_View,p.News_Cmt,p.News_Url,p.News_Img_Upload,p.Topic_Id,p.News_Index,p.Created_At,p.News_Id],function(err,news)
    {
        if(err ){
            result("Update thất bại");
        }
       
        else{
            result("update thành công");
}
    })
}
module.exports = News;