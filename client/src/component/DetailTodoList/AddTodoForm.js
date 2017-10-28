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
    const limitDate = this.props.formDate

    const _onKeyPress = e =>  {
        if (e.charCode === 13) { 
          e.preventDefault();
        } 
    }
    
    const handleSubmit = e => {

        if (todo === "") {
            this.setState({ errorText: 'Todoリストが未入力です' })
        } else if([...todo].length > 30) {
            this.setState({ errorText: '30文字以内にしてください' })
        } else {
            this.props.requestData()
            axios.post('/api/todo',{
                pathname,
                todo,
                limitDate
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
                新しいTodoを作成する<br />
                <TextField hintText="Todo" value={todo} onKeyPress={_onKeyPress} errorText= {this.state.errorText} onChange={e => this.props.addTodos(e.target.value)} />
                </label>
                <label>
                Todoの期限日:
                <input type="date" value={limitDate} onChange={e => this.props.addDate(e.target.value)} required />
                </label>
                <RaisedButton label="Todoの作成" primary={true} onClick={e => handleSubmit(e)} /><br />
            </form>
        </div>
        </MuiThemeProvider>
    )
    }
}

export default AddTodoForm