import React from 'react'
import axios from 'axios'
import { requestData,receivedDataSuccess,receiveDataFaild } from '../actions'

class TodoList extends React.Component {

componentDidMount(){
        this.props.store.dispatch(requestData())
        axios.get('/api/todos')
        .then(response => {
            const _todoArray = response.data
            this.props.store.dispatch(receivedDataSuccess(_todoArray))
        })
        .catch(err => {
            console.error(new Error(err))
            this.props.store.dispatch(receiveDataFaild())
        })
}
render(){
    const { isFetching,todoArray } = this.props.store.getState().todos
    return(
        <div>
        {
        isFetching
        ?<h2>Now loading</h2>
        :<div>
            <ul>
                {todoArray.map(todo => (
                    <li key={todo._id}>
                    {`${todo.todo}`}
                    </li>
                ))}
            </ul>
        </div>
        }
        </div>
    )
}
}

export default TodoList