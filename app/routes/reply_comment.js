module.exports = function (router){
    var reply_commnetController = require ('../controllers/reply_comment.controller');

router.get('/reply_comment/list',reply_commnetController.get_list_reply_comment);
router.get('/reply_comment/detail/:id',reply_commnetController.get_detail);
router.post('/reply_comment/add',reply_commnetController.add_reply_comment);
router.delete('/reply_comment/delete/:id',reply_commnetController.delete_reply_comment);
router.put('/reply_comment/update',reply_commnetController.update_reply_comment);
} 