import React from 'react'
import axios from 'axios'

class DetailTodo extends React.Component{
    constructor(props){
        super(props)
        this.props = props
        this.checkTodo = this.checkTodo.bind(this);
    }
    componentDidMount(){
        const location = this.props.location
        const pathname = location
        console.log(pathname)
        this.props.requestData()
        axios.get('/api/todo/',{params:{pathdesu:pathname}})
        .then(response => {
            const _todoArray = response.data.todos
            console.log("hoge:"+_todoArray)
            this.props.receivedTodoDataSuccess(_todoArray)
        })
        .catch(err => {
            console.error(new Error(err))
            this.props.receiveDataFaild()
        })
    }


    checkTodo(id){
        this.props.requestData()
        axios.put('/api/todo',{
            id
        })
        .then(response => {
            const _todoArray = response.data
            this.props.receivedTodoDataSuccess(_todoArray)
        })
        .catch(err => {
            console.error(new Error(err))
            this.props.receiveDataFaild()
        })
    }

render(){
    console.log(this.props.todos)
    const hoges = this.props.todos.todos
    const check = this.props.todos.check

    return(
        <div>
        {this.props.todos.map(todo => (
            <p key={todo._id}>
            <div>
            <input type="checkbox" onChange={() => this.checkTodo(todo._id)}  />{todo.todo}</div>
            <p>期限日:{todo.limitDay}</p>
            <p>作成日:{todo.createDay}</p>
            </p>
        ))}
        </div>
    )

}
}


export default DetailTodo