const db = require('../common/connect');
var Topic = function(topic){
    this.Topic_Id = topic.Topic_Id;
    this.Topic_Name = topic.Topic_Name;
    this.Topic_Describe = topic.Topic_Describe;
    this.Topic_Amount = topic.Topic_Amount;
    this.Topic_Color= topic.Topic_Color;
}
Topic.get_all = function(result){
    db.query("SELECT * FROM topic ",function(err,topic){
       if(err){
           result("Error");
       }
       else{
    result(topic);
       }
   });

}

Topic.getById = function(id, result){
    db.query("SELECT * FROM topic where Topic_Id = ?",id,function(err,topic){
        if(err || topic.length == 0){
            result(null);
        }
       
        else{
            result(topic[0]);
        }
    });
   
}
//post
Topic.create = function(data,result){

    db.query("INSERT INTO topic SET ?",data,function(err,topic){
       
        if(err )
        {
            result("Insert thất bại");
        }
        else
        {
            result({Topic_Id: topic.InsertTopic_Id, ...data})
        }
    })
}
//delete
Topic.remove = function(Topic_Id ,result){
    db.query("DELETE from topic WHERE Topic_Id = ?",Topic_Id,function(err,topic){
        if(err ){
            result("Delete thất bại");
        }
       
        else{
            result("xoá dữ liệu news có id "+ Topic_Id + " thành công");
}
    })
}

//put (gioongs create)
Topic.update = function(p,result){
    db.query(" UPDATE topic SET Topic_Name =? ,Topic_Describe =? ,Topic_Amount = ?,Topic_Color =? WHERE Topic_Id=?",[p.Topic_Name,p.Topic_Describe,p.Topic_Amount,p.Topic_Color,p.Topic_Id],function(err,topic)
    {
        if(err ){
            result("Update thất bại");
        }
       
        else{
            result("update thành công");
}
    })
}
module.exports = Topic;