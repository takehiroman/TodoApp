import {  combineReducers } from 'redux'
import { TODO,INITIALIZE_FORM,REQUEST_DATA,RECEIVE_DATA_SUCCESS,RECEIVE_DATA_FAILD } from './actions'

//初期のstate
const initialState = {
  form:{  todo: '',
  },
  todos: {
      isFetching: false,
      todoArray: [],
  },
}
//formのreducer
const formReducer = (state = initialState.form,action) => {
    switch (action.type){
        case TODO:
            return{
                ...state,
                todo: action.todo,
            }
        case INITIALIZE_FORM:
            return initialState.form
        default:
            return state
    }
}
//todoのreducer
const todosReducer = (state = initialState.todos,action) => {
    switch (action.type){
        case REQUEST_DATA:
        return{
            ...state,
            isFetching:true,
        }
        case RECEIVE_DATA_SUCCESS:
        return{
            ...state,
            isFetching:false,
            todoArray: action.todoArray,
        }
        case RECEIVE_DATA_FAILD:
            return {
                ...state,
                isFetching:false,
            }
        default:
            return state
    }

    
}

const rootReducer = combineReducers({
    form: formReducer,
    todos:todosReducer
})

export default rootReducer