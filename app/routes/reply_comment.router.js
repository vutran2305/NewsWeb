module.exports = function (router){
    var replycommnetController = require ('../controllers/reply_comment.controller');

router.get('/replycomment/list',replycommnetController.get_list_reply_comment);
router.get('/replycomment/detail/:id',replycommnetController.get_detail);
router.post('/replycomment/add',replycommnetController.add_reply_comment);
router.delete('/replycomment/delete/:id',replycommnetController.delete_reply_comment);
router.put('/replycomment/update',replycommnetController.update_reply_comment);
} 