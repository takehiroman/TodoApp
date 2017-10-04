import React from 'react'
import { addTodo,initializeForm,requestData,receivedDataSuccess,receiveDataFaild } from '../../actions/listActions'
import axios from 'axios'

const AddForm = ({ store }) => {
    //formからの内容を取得する
    const { todoList } = store.getState().form

    const handleSubmit = e => {
        //formのsubmitした時のデフォルト動作を抑制
        e.preventDefault()

        store.dispatch(requestData())
        axios.post('/api/todos',{
            todoList,
        })
        .then(response => {
            store.dispatch(initializeForm())
            const todoListArray = response.data
            store.dispatch(receivedDataSuccess(todoListArray))
        })
        .catch(err => {
            console.log(new Error(err))
            store.dispatch(receiveDataFaild())
        })
    }

    return(
        <div>
            <form onSubmit={e => handleSubmit(e)}>
                <label>
                    新しいTodoList:
                    <input value={todoList} onChange={e => store.dispatch(addTodo(e.target.value))} />
                </label>
                <button type="submit">リストの追加</button>
            </form>
        </div>


    )
}

export default AddForm