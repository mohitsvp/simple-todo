const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
    {
        title : {type: String, required : true},
        status : {type: Boolean, required : false, default : false}
    }
)

const Todo = mongoose.model("Todo", todoSchema)

module.exports = Todo