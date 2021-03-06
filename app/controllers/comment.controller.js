const Comment = require("../services/comment.services");
const PAGE_SIZE = 15;

//get list
exports.get_list_comment = function (req, res) {
  var page = parseInt(req.query.page) || 1;
  var star = (page - 1) * PAGE_SIZE;
  var end = page * PAGE_SIZE;
  Comment.get_all(req.params.id, function (data, total) {
    if (data != null) {
      res.send({ result: data.slice(star, end), total });
    } else {
      res.send({ result: data });
    }
  });
};
// get detail
exports.get_detail = function (req, res) {
  Comment.getById(req.params.id, function (respnse, total) {
    res.send({ result: respnse, total });
  });
};
// add
//lấy dữ liệu từ form để add
//cài body_parser
exports.add_comment = function (req, res) {
  var data = req.body;
  Comment.create(data, function (respnse) {
    console.log("Check response backend:", respnse);
    res.send({ result: respnse });
  });
};
//delete
exports.delete_comment = function (req, res) {
  var id = req.params.id;
  //callback
  Comment.remove(id, function (respnse) {
    res.send({ result: respnse });
  });
};
//put (update gioongs add can data)
exports.update_comment = function (req, res) {
  var id = req.params.id;
  var data = req.body;
  Comment.update(id, data, function (respnse) {
    res.send({ result: respnse });
  });
};
