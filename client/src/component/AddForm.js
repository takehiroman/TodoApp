import React from 'react'
import { addTodo,initializeForm,requestData,receivedDataSuccess,receiveDataFaild } from '../actions'
import axios from 'axios'

const AddForm = ({ store }) => {
    //formからの内容を取得する
    const { todo } = store.getState().form

    const handleSubmit = e => {
        //formのsubmitした時のデフォルト動作を抑制
        e.preventDefault()

        store.dispatch(requestData())
        axios.post('/api/todos',{
            todo,
        })
        .then(response => {
            store.dispatch(initializeForm())
            const todoArray = response.data
            store.dispatch(receivedDataSuccess(todoArray))
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
                    新しいTodo:
                    <input value={todo} onChange={e => store.dispatch(addTodo(e.target.value))} />
                </label>
                <button type="submit">リストの追加</button>
            </form>
        </div>


    )
}

export default AddForm