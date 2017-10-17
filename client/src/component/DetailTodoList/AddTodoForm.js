import React from 'react'
import axios from 'axios'
import dateFormat from 'dateformat'

class AddTodoForm extends React.Component {

    constructor(props){
        super(props)
        this.props = props
    }

    render(){
    const location = this.props.location
    const pathname = location
    //formからの内容を取得する
    const todo = this.props.formTodo
    const limitDay = this.props.formDay
    //const formatlimit = dateFormat(limitDay,"yyyy/mm/dd")
    //現在時刻の取得
    const timestamp = dateFormat(new Date(),"yyyy-mm-dd")
    const createDay = timestamp

    const handleSubmit = e => {
        //formのsubmitした時のデフォルト動作を抑制
        e.preventDefault()

        this.props.requestData()
        axios.post('/api/todo',{
            pathname,
            todo,
            limitDay
        })
        .then(response => {
            console.log(response)
            this.props.initializeForm()
            console.log("mogemoge"+response.data)
            const _todoArray = response.data.todos
            this.props.receivedTodoDataSuccess(_todoArray)
            
        })
        .catch(err => {
            this.props.receiveDataFaild()
            console.log(new Error(err))
            
        })
    }

    return(
        <div>
            <form onSubmit={e => handleSubmit(e)}>
                <label>
                新しいTodo:
                <input value={todo} onChange={e => this.props.addTodos(e.target.value)} />
                </label>
                <label>
                Todoの期限日:
                    <input type="date" value={limitDay} onChange={e => this.props.addDay(e.target.value)} />
                </label>
                <button type="submit">Todoの作成</button>
            </form>
        </div>
    )
}
}

export default AddTodoForm