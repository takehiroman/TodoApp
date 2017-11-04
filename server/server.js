const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const mongoose = require('mongoose')
const app = express();
import TodoList from './todolist'
import dateFormat from 'dateformat'
const port = 3001

const dbUrl = 'mongodb://localhost/todoList'

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

mongoose.connect(dbUrl, dbErr => {
    if (dbErr) throw new Error(dbErr)
    else console.log('db connected')

    app.post('/api/todos', (request, response) => {
        const { todoList } = request.body

        new TodoList({
            todoList,
        }).save(err => {
            if (err) response.status(500).send({ 'SERVER_ERROR': err });
            else if(TodoList) {
                TodoList.find({}, (findErr, todoListArray) => {
                    if (findErr) response.status(500).send({ 'SERVER_ERROR': err });
                    else response.status(200).send(todoListArray)
                })
            }
        })
    })

    app.post('/api/todo', (request, response) => {
        const todos = {
            limitDate: request.body.limitDate,
            todo: request.body.todo
        }

        TodoList.findByIdAndUpdate(
            { _id: request.body.pathname },
            { $push: { todos: todos } },
            { safe: true, upsert: true },
            err => {
                if (err) response.status(500).send({ 'SERVER_ERROR': err });
                else {
                    TodoList.findById({ _id: request.body.pathname }, (findErr, todoArray) => {
                        if (findErr) response.status(500).send({ 'SERVER_ERROR': err });
                        else if(!todoArray) response.status(404).send({ 'RESOURCE_NOT_FOUND': err });
                        else response.status(200).send(todoArray); 
                    })
                }
            })

    })

    app.put('/api/todo/check', (request, response) => {
        const { id, pathname } = request.body
        TodoList.update({ '_id': pathname, 'todos._id': id }, { $inc: { 'todos.$.check': 1 } }, err => {
            if (err) response.status(500).send().send({ 'SERVER_ERROR': err });
            else {
                TodoList.findById({ _id: request.body.pathname }, {}, (findErr, todoArray) => {
                    if (findErr) response.status(500).send({ 'SERVER_ERROR': err });
                    else if(!todoArray) response.status(404).send({ 'RESOURCE_NOT_FOUND': err });
                    else response.status(200).send(todoArray); 
                })
            }
        })
    })

    app.put('/api/todo/uncheck', (request, response) => {
        const { id, pathname } = request.body
        TodoList.update({ '_id': pathname, 'todos._id': id }, { $inc: { 'todos.$.check': -1 } }, err => {
            if (err) response.status(500).send().send({ 'SERVER_ERROR': err });
            else {
                TodoList.findById({ _id: request.body.pathname }, {}, (findErr, todoArray) => {
                    if (findErr) response.status(500).send({ 'SERVER_ERROR': err });
                    else if(!todoArray) response.status(404).send({ 'RESOURCE_NOT_FOUND': err });
                    else response.status(200).send(todoArray); 
                })
            }
        })
    })

    app.get('/api/todos', (request, response) => {
        TodoList.find({}, (err, todoListArray) => {
            if (err) response.status(500).send({ 'SERVER_ERROR': err });
            else if(!todoListArray) response.status(404).send({ 'RESOURCE_NOT_FOUND': err });
            else response.status(200).send(todoListArray);                
        }).sort({ createdDate: -1 })
    })

    app.get(`/api/todo`, (request, response) => {
        const { pathdesu } = request.query
        TodoList.findById({ _id: pathdesu }, (err, todoArray) => {
            if (err) response.status(500).send({ 'SERVER_ERROR': err });
            else if(!todoArray) response.status(404).send({ 'RESOURCE_NOT_FOUND': err });
            else response.status(200).send(todoArray); 
        }).sort({ createDate: 1 })
    })

    app.get('/api/search', (request, response) => {
        const { word } = request.query
        console.log(word)
        TodoList.find({ todoList: new RegExp(word, "i") }, (err, todoListArray) => {
            if (err) response.status(500).send({ 'SERVER_ERROR': err });
            else if(!todoListArray) response.status(404).send({ 'RESOURCE_NOT_FOUND': err });
            else response.status(200).send(todoListArray); 

        }).sort({ createdDate: -1 })

    })

    app.get('/api/searchTodo', (request, response) => {
        const { word } = request.query
        console.log(word)
        TodoList.find({ "todos.todo": new RegExp(word, "i") }, (err, todoArray) => {
            if (err) response.status(500).send({ 'SERVER_ERROR': err });
            else if(!todoArray) response.status(404).send({ 'RESOURCE_NOT_FOUND': err });
            else response.status(200).send(todoArray); 
        }).sort({ createdDate: -1 })
    })

    app.listen(port, err => {
        if (err) throw new Error(err)
        else console.log(`listen on port ${port}`)
    })
})

//静的ファイルの読み込み
app.use(express.static(path.join(__dirname, '../client/build')))


