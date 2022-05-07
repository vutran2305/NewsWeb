const db = require('../common/connect');
var Reply_Comment = function(reply_comment){
    this.Reply_Cmt_Id = reply_comment.Reply_Cmt_Id;
    this.Reply_Cmt_Content = reply_comment.Reply_Cmt_Content;
    this.User_Id = reply_comment.User_Id;
    this.Cmt_Id = reply_comment.Cmt_Id;
    this.Cmt_Id= reply_comment.Cmt_Id;
}
Reply_Comment.get_all = function(result){
    db.query("SELECT * FROM reply_comment ",function(err,reply_comment){
       if(err){
           result("Error");
       }
       else{
    result(reply_comment);
       }
   });

}

Reply_Comment.getById = function(id, result){
    db.query("SELECT * FROM reply_comment where Reply_Cmt_Id = ?",id,function(err,reply_comment){
        if(err || reply_comment.length == 0){
            result(null);
        }
       
        else{
            result(reply_comment[0]);
        }
    });
   
}
//post
Reply_Comment.create = function(data,result){

    db.query("INSERT INTO reply_comment SET ?",data,function(err,reply_comment){
       
        if(err )
        {
            result("Insert thất bại");
        }
        else
        {
            result({Reply_Cmt_Id: reply_comment.InsertReply_Cmt_Id, ...data})
        }
    })
}
//delete
Reply_Comment.remove = function(Cmt_Id ,result){
    db.query("DELETE from reply_comment WHERE Reply_Cmt_Id = ?",Reply_Cmt_Id,function(err,reply_comment){
        if(err ){
            result("Delete thất bại");
        }
       
        else{
            result("xoá dữ liệu comment có id "+ Reply_Cmt_Id + " thành công");
}
    })
}

//put (gioongs create)
Reply_Comment.update = function(p,result){
    db.query(" UPDATE reply_comment SET Reply_Cmt_Content =? ,User_Id =? ,Cmt_Id = ?,Reply_Cmt_Create_At =? WHERE Reply_Cmt_Id=?",[p.Reply_Cmt_Content,p.User_Id,p.Cmt_Id,p.Reply_Cmt_Create_At,p.Reply_Cmt_Id],function(err,reply_comment)
    {
        if(err ){
            result("Update thất bại");
        }
       
        else{
            result("update thành công");
}
    })
}
module.exports = Reply_Comment;