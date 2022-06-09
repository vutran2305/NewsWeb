const Register = require("../services/register.service");

// add
//lấy dữ liệu từ form để add
//cài body_parser
exports.add_user = function (req, res) {
  console.log("check req body: ", req);
  var data = req.body;

  Register.create(data, function (respnse) {
    if (data === {}) {
      res.send({ result: "Vui lòng nhập dữ liệu" });
    } else res.send({ result: respnse });
  });
};
exports.get_list = function (req, res) {
  // var page =parseInt(req.query.page )|| 1;
  // var star = (page -1)* PAGE_SIZE;
  // var end = page * PAGE_SIZE;
  Register.get_all(function (data, total) {
    res.send({ result: data, total });
  });
};
exports.update_register = function (req, res) {
  var data = req.body;
  Register.update(data, function (respnse) {
    res.send({ result: respnse });
  });
};

//delete
exports.delete_register = function (req, res) {
  var id = req.params.id;
  //callback
  Register.remove(id, function (respnse) {
    res.send({ result: respnse });
  });
};
