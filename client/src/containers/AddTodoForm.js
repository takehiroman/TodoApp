import {connect} from 'react-redux'
import {addTodos,addDate,initializeForm,requestData,receivedTodoDataSuccess,receiveDataFaild} from '../actions/listActions'
import AddTodoFormComp from '../component/DetailTodoList/AddTodoForm'


const mapStateToProps = (state) => {
    return{
        formTodo:state.todoForm.todo,
        formDate:state.todoForm.limitDate
    }

}

const mapDispatchProps = (dispatch) => {
return{
    addTodos:(todo) => {
        dispatch(addTodos(todo))
    },
    addDate:(limitDate) => {
        dispatch(addDate(limitDate))
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