const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    firstname : String,
    lastname : String,
    email: String,
    password: String,
    phone: Number,
    city: String,
    // posts : {
    //     type : mongoose.Schema.Types.ObjectId,
    //     ref : "Posts"
    // }
})

const usermodel = mongoose.model("Users",userSchema)

module.exports = usermodel