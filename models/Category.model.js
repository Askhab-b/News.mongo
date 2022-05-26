const { type } = require('express/lib/response')
const mongoose = require('mongoose')
const categorySchema = mongoose.Schema({

catName: String

})


const Category = mongoose.model('Category', categorySchema)




module.exports = Category