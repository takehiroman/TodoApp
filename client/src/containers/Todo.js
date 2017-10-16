import {connect} from 'react-redux'
import {requestData,checkTodo,receivedTodoDataSuccess,receiveDataFaild} from '../actions/listActions'
import DetailTodoCompo from '../component/DetailTodoList/DetailTodo'

const mapStateToProps = (state) => {
    console.log('state:',state)
    return{
        todos:state.todos.todoArray,
        check:state.todos.check
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
        checkTodo:(check) => {
            dispatch(checkTodo(check))
        }
        
    }
}

const Todo = connect(
    mapStateToProps,
    mapDispatchToProps
)(DetailTodoCompo)

export default Todo