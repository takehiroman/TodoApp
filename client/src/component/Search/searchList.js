import React,{Component} from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Table,TableBody,TableHeader,TableHeaderColumn,TableRowColumn,TableRow} from 'material-ui/Table'

class SearchList extends Component{
    constructor(props){
        super(props)
        this.props = props
    }

    render(){
        console.log(this.props.searchList)
        const hitListcount = this.props.searchList.length>0 ? <p>Todoリストが{this.props.searchList.length}件がヒットしました</p>:<p>対象のTodoリストは見つかりません</p>
        const hitTodoCount = this.props.searchTodo.length>0 ? <p>Todoが{this.props.searchTodo.length}件がヒットしました</p>:<p>対象のTodoは見つかりません</p> 
        return(
            <MuiThemeProvider>
            <div>
            {this.props.Fetching?<div>
                {hitTodoCount}
                <Table>
                <TableHeader displaySelectAll={false}>
                    <TableRow><TableHeaderColumn>Todo</TableHeaderColumn><TableHeaderColumn>Todoリスト</TableHeaderColumn><TableHeaderColumn>作成日</TableHeaderColumn><TableHeaderColumn>期限日</TableHeaderColumn></TableRow>
                </TableHeader>
                <TableBody deselectOnClickaway={false} showRowHover displayRowCheckbox={false}>
                {this.props.searchTodo.map (searchTodo => (
                    <TableRow>
                    <TableRowColumn><Link to={`/${searchTodo.id}`}>{`${searchTodo.todo}`}</Link></TableRowColumn>
                    <TableRowColumn>{searchTodo.todoname}</TableRowColumn>
                    <TableRowColumn>{moment(searchTodo.createDay).format('YYYY/MM/DD')}</TableRowColumn>
                    <TableRowColumn>{moment(searchTodo.limitDay).format('YYYY/MM/DD')}</TableRowColumn>
                    </TableRow>
                ))}
                </TableBody>
                </Table> 
                <hr />       
            {hitListcount}
            <Table>
            <TableHeader displaySelectAll={false}>
                <TableRow><TableHeaderColumn>Todoリスト</TableHeaderColumn><TableHeaderColumn>作成日</TableHeaderColumn></TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false}>
            {this.props.searchList.map (searchList => (
                <TableRow>
                <TableRowColumn><Link to={`/${searchList._id}`}>{`${searchList.todoList}`}</Link></TableRowColumn>
                <TableRowColumn>{moment(searchList.createdDate).format('YYYY/MM/DD')}</TableRowColumn>
                </TableRow>
            ))}
            </TableBody>
            </Table> 
            <hr />
            
            </div>:<p></p>}
            </div>
        </MuiThemeProvider>
        )
    }
}

export default SearchList