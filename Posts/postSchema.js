const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref: "Users",
        required : true
    },
    title : {
        type: String,
        required : true
    },
    content :{ 
        type: String,
        required : true
    },
    image:{
        type: Object,
    }
})

const postmodel = mongoose.model("Posts",postSchema)

module.exports = postmodel