import React from 'react'
import axios from 'axios'

class DetailTodo extends React.Component{
    constructor(props){
        super(props)
        this.props = props
        this.checkTodo = this.checkTodo.bind(this);
        this.changeSelection = this.changeSelection.bind(this);
    }
    componentDidMount(){
        const location = this.props.location
        const pathname = location
        console.log(pathname)
        this.props.requestData()
        axios.get('/api/todo/',{params:{pathdesu:pathname}})
        .then(response => {
            console.log(response.data)
            const todoList = response.data.todoList
            const _todoArray = response.data.todos
            console.log(_todoArray)
            this.props.receivedTodoDataSuccess(_todoArray)
        })
        .catch(err => {
            console.error(new Error(err))
            this.props.receiveDataFaild()
        })
    }


    checkTodo(id,check){
        var nextState = this.props.todos.map(todo => {
            return {
              id: todo._id,
              checked: (todo._id === id ? !todo.check: todo.check)
            };
          });
        console.log(nextState)
        this.setState( {todos: nextState });
        this.props.requestData()
        console.log(id)
        axios.put('/api/todo',{
            id,check
        })
        .then(response => {
            const _todoArray = response.data
            this.props.receivedTodoDataSuccess(_todoArray)
        })
        .catch(err => {
            console.error(new Error(err))
            this.props.receiveDataFaild()
        })
    }

    changeSelection(id){
        var nextState = this.props.todos.map(todo => {
          return {
            id: todo._id,
            checked: (todo._id === id ? !todo.check: todo.check)
          };
        });
      
        console.log(nextState); // 確認用
        this.setState( {todos: nextState });
      }

render(){
    const TodoCount = this.props.todos.length<=0 ? <p>登録されたTodoはございません</p>:<p></p> 
    return(
        <div>
        {TodoCount}
        {this.props.todos.map(todo => (
            <p key={todo._id}>
            <div>
            <input type="checkbox" checked={todo.checked} onChange={this.checkTodo.bind(this,todo._id,todo.check)} />{todo.todo}</div>
            <p>期限日:{todo.limitDay}</p>
            <p>作成日:{todo.createDay}</p>
            </p>
        ))}
        </div>
    )

}
}


export default DetailTodo