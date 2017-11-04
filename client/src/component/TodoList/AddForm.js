import React, { Component } from 'react'
import axios from 'axios'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


class AddForm extends Component {

    constructor(props) {
        super(props)
        this.props = props
        this.state = { errorText: '', value: props.value }
    }

    render() {
        //formからの内容を取得する
        const todoList = this.props.form

        const _onKeyPress = e => {
            if (e.charCode === 13) {
                e.preventDefault();
            }
        }

        const handleSubmit = e => {

            if (todoList === "" || todoList.replace(/^\s+|\s+$/g, "") === "") {
                this.setState({ errorText: 'Todoリストが未入力です' })
                this.props.initializeForm()
            } else if ([...todoList].length > 30) {
                this.setState({ errorText: '30文字以内にしてください' })
            } else {
                
                //formのsubmitした時のデフォルト動作を抑制
                e.preventDefault()
                this.setState({ errorText: '' })
                axios.post('/api/todos', {
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



        }


        return (
            <MuiThemeProvider>
                <div>
                    <br />
                    <form>
                        <label>
                            新しいTodoリストを作成する<br />
                            <TextField hintText="リスト名を入力してください" value={todoList} onKeyPress={_onKeyPress} errorText={this.state.errorText} onChange={e => this.props.addTodo(e.target.value)} />
                        </label>
                        <RaisedButton label="リストの追加" primary={true} onClick={e => handleSubmit(e)} />
                    </form>
                </div>
            </MuiThemeProvider>
        )
    }

}

export default AddForm