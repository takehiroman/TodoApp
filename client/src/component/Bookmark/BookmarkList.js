import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import moment from 'moment'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRowColumn, TableRow } from 'material-ui/Table'

class BookmarkList extends Component {
    constructor(props) {
        super(props)
        this.props = props
    }
    componentDidMount() {
        this.props.requestData()
        axios.get('/api/bookmarkTodo')
            .then(response => {
                const _todoListArray = response.data
                console.log(_todoListArray)
                let todoListArray = []
                for (const todo of _todoListArray){
                    for (let i = 0; i < todo.todos.length; i++) {
                        if(todo.todos[i].bookmark === 1){
                            todo.todos[i].listpath = todo._id
                            todo.todos[i].listname = todo.todoList
                            console.log(todo.todos[i])
                            todoListArray.push(todo.todos[i])
                        }
                    }
                }
                console.log(todoListArray)
                this.props.receivedBookmarkDataSuccess(todoListArray)
            })
            .catch(err => {
                console.error(new Error(err))
                this.props.receiveDataFaild()
            })
    }    

    render() {
        console.log(this.props.bookmarkList)
        return (
            <MuiThemeProvider>
                <div>
                        <Table>
                            <TableHeader displaySelectAll={false}>
                                <TableRow><TableHeaderColumn>Todo</TableHeaderColumn><TableHeaderColumn>Todoリスト</TableHeaderColumn><TableHeaderColumn>期限日</TableHeaderColumn></TableRow>
                            </TableHeader>
                            <TableBody deselectOnClickaway={false} showRowHover displayRowCheckbox={false}>
                            {this.props.bookmarkList.map(bookmarkTodo => (
                                <TableRow key={bookmarkTodo._id}>
                                <TableRowColumn><Link to={`/${bookmarkTodo.listpath}`}>{`${bookmarkTodo.todo}`}</Link></TableRowColumn>
                                <TableRowColumn>{bookmarkTodo.listname}</TableRowColumn>
                                <TableRowColumn>{moment(bookmarkTodo.limitDate).format('YYYY/MM/DD')}</TableRowColumn>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </div>
            </MuiThemeProvider>
        )
    }
}

export default BookmarkList