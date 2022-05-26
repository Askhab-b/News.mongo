const { type } = require('express/lib/response')
const mongoose = require('mongoose')
const newsSchema = mongoose.Schema({


header: String,
text: String,
categoryId: {
    ref: "Category",
    type: mongoose.SchemaTypes.ObjectId
}

})


const News = mongoose.model('News', newsSchema)




module.exports = News