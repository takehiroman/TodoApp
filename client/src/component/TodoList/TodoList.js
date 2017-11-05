import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import moment from 'moment'
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRowColumn, TableRow } from 'material-ui/Table'

class TodoList extends React.Component {

    constructor(props) {
        super(props)
        this.props = props
    }

    componentDidMount() {
        this.props.requestData()
        axios.get('/api/todos')
            .then(response => {
                const _todoListArray = response.data
                let todoListArray = []
                let j = 0
                let MinDate = 0
                let limitDates = []
                console.log(_todoListArray)
                for (const todo of _todoListArray) {
                    for (let i = 0; i < todo.todos.length; i++) {
                        j = j + todo.todos[i].check
                        if(todo.todos[i].check === 0){
                            limitDates.push(new Date(todo.todos[i].limitDate))
                        }
                    }
                    console.log(limitDates)
                    MinDate = new Date(Math.min.apply(null,limitDates))
                    console.log(MinDate)
                    todo.count = j
                    todo.limitDate = MinDate
                    j = 0
                    limitDates = []
                    todoListArray.push(todo)
                }
                console.log(todoListArray)
                this.props.receivedDataSuccess(todoListArray)
            })
            .catch(err => {
                console.error(new Error(err))
                this.props.receiveDataFaild()
            })
    }

    render() {


        console.log(this.props.todoLists)
        return (
            <MuiThemeProvider>
                <div>
                    <Table>
                        <TableHeader displaySelectAll={false}>
                            <TableRow><TableHeaderColumn>Todoリスト</TableHeaderColumn><TableHeaderColumn>Todoの数</TableHeaderColumn><TableHeaderColumn>完了済みのTodoの数</TableHeaderColumn><TableHeaderColumn>未完了のTodoの期限</TableHeaderColumn></TableRow>
                        </TableHeader>
                        <TableBody deselectOnClickaway={false} showRowHover displayRowCheckbox={false}>
                            {this.props.todoLists.map(todoList => (
                                <TableRow key={todoList._id}>
                                    <TableRowColumn><Link to={`/${todoList._id}`}>{`${todoList.todoList}`}</Link></TableRowColumn>
                                    <TableRowColumn>{todoList.todos.length}</TableRowColumn>
                                    <TableRowColumn>{todoList.count}</TableRowColumn>
                                    <TableRowColumn>{isNaN(todoList.limitDate)?"":moment(todoList.limitDate).format('YYYY/MM/DD')}</TableRowColumn>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </MuiThemeProvider>
        )

    }
}

export default TodoList