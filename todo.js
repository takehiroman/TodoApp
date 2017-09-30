const mongoose = require('mongoose')

mongoose.Promise = global.Promise

//スキーマ
const TodoSchema = new mongoose.Schema({
    todo: String,
})

//モデル
const Todo = mongoose.model('Todo',TodoSchema)

export default Todo

