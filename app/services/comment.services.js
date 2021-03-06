const db = require("../common/connect");
var Comment = function (comment) {
  this.Cmt_Id = comment.Cmt_Id;
  this.Cmt_Content = comment.Cmt_Content;
  this.News_Id = comment.News_Id;
  this.User_Id = comment.User_Id;
  this.Created_at = comment.Created_at;
  this.Updated_At = comment.Update_At;
};
Comment.get_all = function (id, result) {
  db.query(
    "SELECT * FROM comment Where News_Id =?",
    id,
    function (err, comment, total) {
      total = comment.length;
      if (err) {
        result("Lỗi hiển thị");
      } else {
        result(comment, total);
      }
    }
  );
};

Comment.getById = function (id, result) {
  db.query(
    "SELECT * FROM comment where User_Id = ?",
    id,
    function (err, comment, total) {
      total = comment.length;
      if (err || comment.length == 0) {
        result(null);
      } else {
        result(comment, total);
      }
    }
  );
};
//post
Comment.create = function (data, result) {
  db.query("INSERT INTO comment SET ?", data, function (err, comment) {
    if (err) {
      result("Insert thất bại");
    } else {
      result({ Cmt_Id: comment.InsertCmt_Id, ...data });
    }
  });
};
//delete
Comment.remove = function (Cmt_Id, result) {
  db.query(
    "DELETE from comment WHERE Cmt_Id = ?",
    Cmt_Id,
    function (err, comment) {
      if (err) {
        result("Delete thất bại");
      } else {
        result("xoá dữ liệu comment thành công");
      }
    }
  );
};

//put (gioongs create)
Comment.update = function (id, p, result) {
  db.query(
    " UPDATE comment SET Cmt_Content =?,Updated_At=CURRENT_DATE WHERE Cmt_Id=?",
    [p.Cmt_Content, id],
    function (err, comment) {
      if (err) {
        result("Update thất bại");
      } else {
        result("update thành công");
      }
    }
  );
};
module.exports = Comment;
