module.exports = function (router){
    // var registerController = require ('../controllers/register.controller');
    var registerController = require("../controllers/register.controller");


router.post('/register',registerController.add_user);
router.get('/register/list',registerController.get_list);
router.put('/register/update',registerController.update_register);
router.delete('/register/delete/:id',registerController.delete_register);
} 