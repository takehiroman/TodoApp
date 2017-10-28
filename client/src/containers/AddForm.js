import { connect } from 'react-redux'
import { addTodo, requestData, receivedDataSuccess, receiveDataFaild, initializeForm } from '../actions/listActions'
import AddFormCompo from '../component/TodoList/AddForm'

const mapStateToProps = (state) => {
    return {
        form: state.form.todoList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (todoList) => {
            dispatch(addTodo(todoList))
        },
        requestData: () => {
            dispatch(requestData())
        },
        receivedDataSuccess: (todoListArray) => {
            dispatch(receivedDataSuccess(todoListArray))
        },
        receiveDataFaild: () => {
            dispatch(receiveDataFaild())
        },
        initializeForm: () => {
            dispatch(initializeForm())
        }
    }
}

const AddForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddFormCompo)

export default AddForm