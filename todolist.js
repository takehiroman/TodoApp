import mongoose from 'mongoose'

mongoose.Promise = global.Promise

//スキーマ
const TodoListSchema = new mongoose.Schema({
    todoList: { type: String },
    createdDate : {type: Date, default: Date.now},
    todos:[{
        todo:{type:String},
        createDay:{type: Date, default: Date.now},
        limitDay:{type:Date},
        check:{type:Boolean,default:false}
    }]
})


//モデル
const TodoList = mongoose.model('TodoList',TodoListSchema)

export default TodoList

