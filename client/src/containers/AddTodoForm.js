import {connect} from 'react-redux'
import {addTodos,addDay,initializeForm,requestData,receivedTodoDataSuccess,receiveDataFaild} from '../actions/listActions'
import AddTodoFormComp from '../component/DetailTodoList/AddTodoForm'


const mapStateToProps = (state) => {
    return{
        formTodo:state.todoForm.todo,
        formDay:state.todoForm.limitDay
    }

}

const mapDispatchProps = (dispatch) => {
return{
    addTodos:(todo) => {
        dispatch(addTodos(todo))
    },
    addDay:(limitDay) => {
        dispatch(addDay(limitDay))
    },
    requestData:() => {
        dispatch(requestData())
    },
    initializeForm:() => {
        dispatch(initializeForm())
    },

    receivedTodoDataSuccess:(todoArray) => {
        dispatch(receivedTodoDataSuccess(todoArray))
    },
    receiveDataFaild:() => {
        dispatch(receiveDataFaild())
    }
}
}

const AddTodoForm = connect(
    mapStateToProps,
    mapDispatchProps
)(AddTodoFormComp)

export default AddTodoForm