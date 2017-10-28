import React from 'react'
import axios from 'axios'
import moment from 'moment'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRowColumn, TableRow } from 'material-ui/Table'

class DetailTodo extends React.Component {
    constructor(props) {
        super(props)
        this.props = props
        this.changeSelection = this.changeSelection.bind(this);
    }
    componentDidMount() {
        const location = this.props.location
        const pathname = location
        console.log(pathname)
        this.props.requestData()
        axios.get('/api/todo/', { params: { pathdesu: pathname } })
            .then(response => {
                console.log(response.data)
                const _todoArray = response.data.todos
                console.log(_todoArray)
                this.props.receivedTodoDataSuccess(_todoArray)
            })
            .catch(err => {
                console.error(new Error(err))
                this.props.receiveDataFaild()
            })
    }




    changeSelection(id) {
        var nextState = this.props.todos.map(todo => {
            return {
                id: todo._id,
                checked: (todo._id === id ? !todo.check : todo.check)
            };
        });

        console.log(nextState); // 確認用
        this.setState({ todos: nextState });
    }

    render() {
        const location = this.props.location
        const pathname = location

        const checkTodo = (id, check) => {
            if (check === 0) {
                this.props.requestData()
                axios.put('/api/todo/check', {
                    id, pathname
                })
                    .then(response => {
                        const _todoArray = response.data.todos
                        this.props.receivedTodoDataSuccess(_todoArray)
                    })
                    .catch(err => {
                        this.props.receiveDataFaild()
                    })
            } else {
                this.props.requestData()
                axios.put('/api/todo/uncheck', {
                    id, pathname
                })
                    .then(response => {
                        const _todoArray = response.data.todos
                        this.props.receivedTodoDataSuccess(_todoArray)
                    })
                    .catch(err => {
                        this.props.receiveDataFaild()
                    })
            }

        }

        const TodoCount = this.props.todos.length <= 0 ? <p>登録されたTodoはございません</p> : <p></p>
        return (
            <MuiThemeProvider>
                <div>
                    {TodoCount}
                    <Table>
                        <TableHeader displaySelectAll={false}>
                            <TableRow><TableHeaderColumn>Todo</TableHeaderColumn><TableHeaderColumn>Todoの状態</TableHeaderColumn><TableHeaderColumn>期限日</TableHeaderColumn><TableHeaderColumn>作成日</TableHeaderColumn></TableRow>
                        </TableHeader>
                        <TableBody deselectOnClickaway={false} showRowHover displayRowCheckbox={false}>
                            {this.props.todos.map(todo => (
                                <TableRow>
                                    <TableRowColumn><p>{todo.todo}</p></TableRowColumn>
                                    <TableRowColumn><button onClick={() => checkTodo(todo._id, todo.check)}>{todo.check === 0 ? "未完了" : "完了"}</button></TableRowColumn>
                                    <TableRowColumn>{moment(todo.limitDate).format('YYYY/MM/DD')}</TableRowColumn>
                                    <TableRowColumn>{moment(todo.createDate).format('YYYY/MM/DD')}</TableRowColumn>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </MuiThemeProvider>
        )

    }
}


export default DetailTodo