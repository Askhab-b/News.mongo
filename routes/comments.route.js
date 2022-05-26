const {Router} = require('express')
const { commentController } = require('../controllers/comments.controller')
const { post } = require('./category.route')

const router = Router() 



router.post('/news/comment/:id', commentController.postComment)
router.delete('/comment/:id', commentController.deleteComment)
router.get('/news/comment/:id', commentController.getCommentsById)









module.exports = router