import React from 'react'
import axios from 'axios'
import { requestData,receivedDataSuccess,receiveDataFaild } from '../../actions/listActions'
import { Link,BrowserRouter,Route } from 'react-router-dom'
import Todo from '../DetailTodoList/Todo'
import AddTodoForm from '../DetailTodoList/AddTodoForm'

class TodoList extends React.Component {

componentDidMount(){
        this.props.store.dispatch(requestData())
        axios.get('/api/todos')
        .then(response => {
            const _todoListArray = response.data
            this.props.store.dispatch(receivedDataSuccess(_todoListArray))
        })
        .catch(err => {
            console.error(new Error(err))
            this.props.store.dispatch(receiveDataFaild())
        })
}



render(){
    const { todoListArray } = this.props.store.getState().todoLists
    
    return(
        <BrowserRouter>
        <div>
        <div>
          {todoListArray.map(todoList => (
                    <li key={todoList._id}>
                    <Link to={`/${todoList.todoList}`}>{`${todoList.todoList}`}</Link>
                    </li>
        ))}
        <hr />
        </div>
        <Route path='/:todoList' render={props => <Todo store={this.props.store} {...props}  />} />
        </div>
        </BrowserRouter>
    )

}
}

export default TodoList