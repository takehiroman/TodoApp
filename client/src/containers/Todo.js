import {connect} from 'react-redux'
import {requestData,checkTodo,receivedTodoDataSuccess,receiveDataFaild} from '../actions/listActions'
import DetailTodoCompo from '../component/DetailTodoList/DetailTodo'

const mapStateToProps = (state) => {
    console.log('state:',state)
    return{
        todos:state.todos.todoArray,
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        requestData:() => {
            dispatch(requestData())
        },
        receivedTodoDataSuccess:(todoArray) => {
            dispatch(receivedTodoDataSuccess(todoArray))
        },
        receiveDataFaild:() => {
            dispatch(receiveDataFaild())
        },
        checkTodo:(todo) => {
            dispatch(checkTodo(todo))
        }
        
    }
}

const Todo = connect(
    mapStateToProps,
    mapDispatchToProps
)(DetailTodoCompo)

export default Todo