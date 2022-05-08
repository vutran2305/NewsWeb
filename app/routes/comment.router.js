module.exports = function (router){
    var commnetController = require ('../controllers/comment.controller');

router.get('/comment/list',commnetController.get_list_comment);
router.get('/comment/detail/:id',commnetController.get_detail);
router.post('/comment/add',commnetController.add_comment);
router.delete('/comment/delete/:id',commnetController.delete_comment);
router.put('/comment/update',commnetController.update_comment);
} 