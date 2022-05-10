module.exports = function (router){
    // var registerController = require ('../controllers/register.controller');
    var registerController = require("../controllers/register.controller");


router.post('/register',registerController.add_user);

} 