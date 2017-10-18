import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class TodoList extends React.Component {

constructor(props){
    super(props)
    this.props = props
}

componentDidMount(){
        this.props.requestData()
        axios.get('/api/todos')
        .then(response => {
            const _todoListArray = response.data
            console.log(_todoListArray)
            this.props.receivedDataSuccess(_todoListArray)
        })
        .catch(err => {
            console.error(new Error(err))
            this.props.receiveDataFaild()
        })
}

render(){
    console.log(this.props.todoLists)
    return(
        <div>
        {this.props.todoLists.map (todoList => (
            <li key={todoList._id}>
            <Link to={`/${todoList._id}`}>{`${todoList.todoList}`}</Link>
            </li>
        ))}
        <hr />
        </div>
    )

}
}

export default TodoList