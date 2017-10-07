import React,{Component} from 'react'
import axios from 'axios'

class AddForm extends Component{

    constructor(props){
        super(props)
        this.props = props
    }

    render(){
        //formからの内容を取得する
        const {todoList} = this.props

        const handleSubmit = e => {
        //formのsubmitした時のデフォルト動作を抑制
        e.preventDefault()

        this.props.requestData()
        axios.post('/api/todos',{
            todoList,
        })
        .then(response => {
            this.props.initializeForm()
            const todoListArray = response.data
            this.props.receivedDataSuccess(todoListArray)
        })
        .catch(err => {
            console.log(new Error(err))
            this.props.receiveDataFaild()
        })
    }

    return(
        <div>
            <form onSubmit={e => handleSubmit(e)}>
                <label>
                    新しいTodoList:
                    <input value={todoList} onChange={e => this.props.addTodo(e.target.value)} />
                </label>
                <button type="submit">リストの追加</button>
            </form>
        </div>


    )
    }

}

export default AddForm