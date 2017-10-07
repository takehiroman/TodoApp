const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const mongoose = require('mongoose')
const app = express();
import TodoList from './todolist'
import dateFormat from 'dateformat'
const port = 3001

const dbUrl = 'mongodb://localhost/todoList'

app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

mongoose.connect(dbUrl,dbErr => {
    if(dbErr) throw new Error(dbErr)
    else console.log('db connected')

    app.post('/api/todos',(request,response) => {
        const { todoList } = request.body

        new TodoList({
            todoList,
        }).save(err => {
            if(err) response.status(500)
                else {
                    TodoList.find({},(findErr,todoListArray) => {
                        if(findErr) response.status(500).send()
                            else response.status(200).send(todoListArray)
                    })
                }
        })
    })

    
    app.get('/api/todos',(request,response) => {
        TodoList.find({},(err,todoListArray) => {
            if(err) response.status(500).send()
            else response.status(200).send(todoListArray)
        })
    })

    app.listen(port,err => {
        if(err) throw new Error(err)
        else console.log(`listen on port ${port}`)
    })
})

//静的ファイルの読み込み
app.use(express.static(path.join(__dirname,'client/build')))


