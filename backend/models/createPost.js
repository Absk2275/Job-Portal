const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title: String,
    description : String,
    skills:String,
    date: Date

}, {timestamps:true})
const Post= mongoose.model("post", postSchema);
module.exports = Post;