const Register = require("../services/register.service");

// add
//lấy dữ liệu từ form để add
//cài body_parser
exports.add_user = function (req, res) {
  console.log("check req body: ", req);
    var data = req.body;
  // var data = req.query;
  // console.log("Check data: ", data);
  Register.create(data, function (respnse) {
    console.log("check data :", data);
    res.send({ result: respnse });
  });
};
