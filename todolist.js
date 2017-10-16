const mongoose = require('mongoose')

mongoose.Promise = global.Promise

//スキーマ
const TodoListSchema = new mongoose.Schema({
    todoList: String,
    todos:[
        {
        todo:String,
        createDay:Date,
        limitDay:Date
        }
    ]
})

//モデル

const TodoList = mongoose.model('TodoList',TodoListSchema)

export default TodoList

