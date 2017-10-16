import React from 'react'
import axios from 'axios'

class DetailTodo extends React.Component{
    constructor(props){
        super(props)
        this.props = props
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


render(){
    console.log(this.props.todos)
    const hoges = this.props.todos.todos
    return(
        <div>
        {this.props.todos.map(todo => (
            <p key={todo._id}>
            <p>{todo.todo}</p>
            <p>期限日:{todo.limitDay}</p>
            <p>作成日:{todo.createDay}</p>
            </p>
        ))}
        </div>
    )

}
}


export default DetailTodo