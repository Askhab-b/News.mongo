const Comment = require('../models/Comment.model')


module.exports.commentController = {



postComment: (req, res) => {
Comment.create({
comName: req.body.comName,
comText: req.body.comText,
comNewsId: req.body.comNewsId
}).then((data) => {
res.json(data)
})
},


deleteComment: (req, res) => {
Comment.findByIdAndRemove(req.params.id).then((data) => {
res.json('Комментарий удалён')
})
},


getCommentsById: (req, res) => {
Comment.find({
comNewsId: req.params.id
}).then((data) => {
res.json(data)
})
}


}