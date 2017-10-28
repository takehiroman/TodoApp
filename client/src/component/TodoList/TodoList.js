import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
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
                console.log(_todoListArray)
                this.props.receivedDataSuccess(_todoListArray)
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
                            <TableRow><TableHeaderColumn>Todoリスト</TableHeaderColumn><TableHeaderColumn>Todoの数</TableHeaderColumn></TableRow>
                        </TableHeader>
                        <TableBody deselectOnClickaway={false} showRowHover displayRowCheckbox={false}>
                            {this.props.todoLists.map(todoList => (
                                <TableRow>
                                    <TableRowColumn><Link to={`/${todoList._id}`}>{`${todoList.todoList}`}</Link></TableRowColumn>
                                    <TableRowColumn>{todoList.todos.length}</TableRowColumn>
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