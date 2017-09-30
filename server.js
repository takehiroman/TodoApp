const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const mongoose = require('mongoose')
const app = express();
import Todo from './todo'
const port = 3001

const dbUrl = 'mongodb://localhost/todo'

app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

mongoose.connect(dbUrl,dbErr => {
    if(dbErr) throw new Error(dbErr)
    else console.log('db connected')

    app.post('/api/todos',(request,response) => {
        const { todo } = request.body

        new Todo({
            todo,
        }).save(err => {
            if(err) response.status(500)
                else response.status(200).send(`${todo} was succes.`)
        })
    })
    
    app.get('/api/todos',(request,response) => {
        Todo.find({},(err,todoArray) => {
            if(err) response.status(500).send()
            else response.status(200).send(todoArray)
        })
    })

    app.listen(port,err => {
        if(err) throw new Error(err)
        else console.log(`listen on port ${port}`)
    })
})

//静的ファイルの読み込み
app.use(express.static(path.join(__dirname,'client/build')))


