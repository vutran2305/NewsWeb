module.exports = function (router){
    var commnetController = require ('../controllers/comment.controller');

router.get('/comment/list/:id',commnetController.get_list_comment);
router.get('/comment/user/:id',commnetController.get_detail);
router.post('/comment/add',commnetController.add_comment);
router.delete('/comment/delete/:id',commnetController.delete_comment);
router.put('/comment/update/:id',commnetController.update_comment);
} 