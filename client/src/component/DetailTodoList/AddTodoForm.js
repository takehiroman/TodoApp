import React from 'react'
import { addTodo,addDay,initializeForm,requestData,receivedDataSuccess,receiveDataFaild } from '../../actions/Actions'
import axios from 'axios'
import dateFormat from 'dateformat'

const AddTodoForm = ({ store }) => {
    //formからの内容を取得する
    const { todo,limitDay } = store.getState().form
    //現在時刻の取得
    const timestamp = dateFormat(new Date(),"yyyy/mm/dd")
    const createDay = timestamp

    const handleSubmit = e => {
        //formのsubmitした時のデフォルト動作を抑制
        e.preventDefault()

        store.dispatch(requestData())
        axios.post('/api/todos/todo',{
            todo,
            createDay,
            limitDay,
        })
        .then(response => {
            console.log(response)
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
                <label>
                Todoの期限日:
                    <input value={limitDay} onChange={e => store.dispatch(addDay(e.target.value))} />
                </label>
                <button type="submit">Todoの作成</button>
            </form>
        </div>
    )
}

export default AddTodoForm