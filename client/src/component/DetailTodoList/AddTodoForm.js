import React from 'react'
import axios from 'axios'
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class AddTodoForm extends React.Component {

    constructor(props){
        super(props)
        this.props = props
        this.state = { errorText: '', value: props.value }
    }

    render(){
    const location = this.props.location
    const pathname = location
    //formからの内容を取得する
    const todo = this.props.formTodo
    const limitDay = this.props.formDay

    const handleSubmit = e => {

        if (todo === "") {
            this.setState({ errorText: 'Todoリストが未入力です' })
        } else if(todo.length > 30) {
            this.setState({ errorText: '30文字以内にしてください' })
        } else {
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
    }

    return(
        <MuiThemeProvider>
        <div>
            <form>
                <label>
                新しいTodo<br />
                <TextField hintText="Todo" value={todo} errorText= {this.state.errorText} onChange={e => this.props.addTodos(e.target.value)} />
                </label>
                <label>
                Todoの期限日:
                    <input type="date" value={limitDay} onChange={e => this.props.addDay(e.target.value)} />
                </label>
                <RaisedButton label="Todoの作成" primary={true} onClick={e => handleSubmit(e)} /><br />
            </form>
        </div>
        </MuiThemeProvider>
    )
}
}

export default AddTodoForm