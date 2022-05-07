module.exports = function (router){
    var topicController = require ('../controllers/topic.controller');

router.get('/topic/list',topicController.get_list_topic);
router.get('/topic/detail/:id',topicController.get_detail);
router.post('/topic/add',topicController.add_topic);
router.delete('/topic/delete/:id',topicController.delete_topic);
router.put('/topic/update',topicController.update_topic);
} 