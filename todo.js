const mongoose = require('mongoose')

mongoose.Promise = global.Promise

const TodoSchema = new mongoose.Schema({
    todo:String,
    createDay:Date,
    limitDay:Date,
    check:{type:Boolean,default:false}
})

const Todo = mongoose.model('Todo',TodoSchema)

export default Todo