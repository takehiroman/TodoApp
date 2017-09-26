import React from 'react'
import { addTodo } from '../actions'

const AddForm = ({ store }) => {
    //formからの内容を取得する
    const { todo } = store.getState().form

    return(
        <div>
            <form>
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