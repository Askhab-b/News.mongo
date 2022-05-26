const Category = require('../models/Category.model')


module.exports.categoryController = {


postCategory: (req, res) => {
Category.create({
catName: req.body.catName
}).then((data) => {
res.json(data)
})
},


deleteCategory: (req, res) => {
    Category.findByIdAndRemove(req.params.id).then((data) => {
        res.json('Категория удалена')
    })
},


getCategory: (req, res) => {
Category.find().then((data) => {
res.json(data)
})
},























}