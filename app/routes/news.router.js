module.exports = function (router){
    var newController = require ('../controllers/news.controller');

router.get('/news/list',newController.get_list_news);
router.get('/news/top/:create_at',newController.get_list_news_by_create_at);
router.post('/news/search',newController.search);
router.get('/news/detail/:id',newController.get_detail);
router.post('/news/add',newController.add_news);
router.delete('/news/delete/:id',newController.delete_news);
router.put('/news/update',newController.update_news);
router.get('/news/listNewByTopic/:id',newController.getListNewByTopic);
} 