const { type } = require('express/lib/response')
const mongoose = require('mongoose')
const commentSchema = mongoose.Schema({


comName: String,
comText: String,
comNewsId: {
  ref: "News",
  type: mongoose.SchemaTypes.ObjectId


  
}

})


const Comment = mongoose.model('Comment', commentSchema)




module.exports = Comment