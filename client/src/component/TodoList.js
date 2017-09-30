import React from 'react'
import axios from 'axios'
import { requestData,receivedDataSuccess,receiveDataFaild } from '../actions'


const TodoList = ({ store }) => {
    const { isFetching,todoArray } = store.getState().todos

    const handleFetchinData = () => {
        store.dispatch(requestData())
        axios.get('/api/todos')
        .then(response => {
            const _todoArray = response.data
            store.dispatch(receivedDataSuccess(_todoArray))
        })
        .catch(err => {
            console.error(new Error(err))
            store.dispatch(receiveDataFaild())
        })
    }

    return(
        <div>
        {
        isFetching
        ?<h2>Now loading</h2>
        :<div>
        <button onClick={() => handleFetchinData()}>fetch</button>
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

export default TodoList