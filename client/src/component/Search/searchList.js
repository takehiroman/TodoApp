import React,{Component} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

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
            <div>
            {this.props.Fetching?<div>
                {hitTodoCount}
                {this.props.searchTodo.map (searchTodo => (
                    <li key={searchTodo.createDay}>
                    <Link to={`/${searchTodo.id}`}>{`${searchTodo.todo}`}</Link>
                    <p>リスト:{searchTodo.todoname}</p>
                    <p>作成日:{searchTodo.createDay}</p>
                    <p>期限日:{searchTodo.limitDay}</p>
                    </li>
                ))} 
                <hr />       
            {hitListcount}
            {this.props.searchList.map (searchList => (
                <li key={searchList._id}>
                <Link to={`/${searchList._id}`}>{`${searchList.todoList}`}</Link>
                <p>作成日:{searchList.createdDate}</p>
                </li>
            ))}
            <hr />
            
            </div>:<p></p>}
            </div>
        )
    }
}

export default SearchList