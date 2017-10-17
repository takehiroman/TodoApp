import React,{Component} from 'react'
import axios from 'axios'

class SearchForm extends Component{
    constructor(props){
        super(props)
        this.props = props
    }

    render(){
        const keyword = this.props.formSearch

        const handleSubmit = e => {
            e.preventDefault()

            this.props.requestData()
            axios.get('/api/search',{params:{word:keyword}})
            .then(response => {
                this.props.initializeForm()
                const _todoListArray = response.data
                console.log(_todoListArray)
                this.props.receivedSearchDataSuccess(_todoListArray)
            })
            .catch(err => {
                console.error(new Error(err))
                this.props.receiveDataFailed()
            })
            axios.get('/api/searchTodo',{params:{word:keyword}})
            .then(response => {
                const _todoArray = response.data
                let merge = []
                for(const todo of _todoArray){
                    for(let i = 0;i < todo.todos.length ; i++){
                        todo.todos[i].id = todo._id
                        todo.todos[i].todoname = todo.todoList

                    }
                    merge.push(...todo.todos)
                }
                const todo = merge.filter((key,index) => {
                    if((key.todo).indexOf(keyword) >= 0)return true
                })
                console.log(todo)

                this.props.receivedSearchTodoSuccess(todo)
            })
            .catch(err => {
                console.error(new Error(err))
                this.props.receiveDataFailed()
            })
        }
        return(
            <div>
            <form onSubmit={e => handleSubmit(e)}>
           <input value={keyword} onChange={e => this.props.searchWord(e.target.value)} />
          <button type="submit">検索</button><br />
          </form>

            </div>
        )
    }
}

export default SearchForm