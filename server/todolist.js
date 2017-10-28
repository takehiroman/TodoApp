import mongoose from 'mongoose'

mongoose.Promise = global.Promise

//スキーマ
const TodoListSchema = new mongoose.Schema({
    todoList: { type: String },
    createdDate: { type: Date, default: Date.now },
    todos: [{
        todo: { type: String },
        createDate: { type: Date, default: Date.now },
        limitDate: { type: Date },
        check: { type: Number, default: 0 }
    }]
})


//モデル
const TodoList = mongoose.model('TodoList', TodoListSchema)

export default TodoList

