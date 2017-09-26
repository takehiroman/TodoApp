import React from 'react'
import { addTodo,initializeForm } from '../actions'
import axios from 'axios'

const AddForm = ({ store }) => {
    //formからの内容を取得する
    const { todo } = store.getState().form

    const handleSubmit = e => {
        //formのsubmitした時のデフォルト動作を抑制
        e.preventDefault()

        axios.post('/api/todos',{
            todo,
        })
        .then(response => {
            console.log(response)
            store.dispatch(initializeForm())
        })
        .catch(err => {
            console.log(new Error(err))
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