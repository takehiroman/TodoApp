import {connect} from 'react-redux'
import {requestData,receivedDataSuccess,receiveDataFaild} from '../actions/listActions'
import TodoListCompo from '../component/TodoList/TodoList'
//import TodoComp from '../component/DetailTodoList/Todo'

const mapStateToProps = (state) => {
    console.log('state:',state)
    return{
        todoLists:state.todoLists.todoListArray
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        requestData:() => {
            dispatch(requestData())
        },
        receivedDataSuccess:(todoListArray) => {
            dispatch(receivedDataSuccess(todoListArray))
        },
        receiveDataFaild:() => {
            dispatch(receiveDataFaild())
        }
    }
}

const TodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoListCompo)

export default TodoList