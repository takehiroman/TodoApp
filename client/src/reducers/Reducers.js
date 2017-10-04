import {  combineReducers } from 'redux'
import { TODO,LIMITDAY,INITIALIZE_FORM,REQUEST_DATA,RECEIVE_DATA_SUCCESS,RECEIVE_DATA_FAILD } from '../actions/Actions'

//初期のstate
const initialState = {
  form:{  
      todo: '',
      limitDay: ''
  },
  todos: {
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
        case LIMITDAY:
            return{
                ...state,
                limitDay: action.limitDay,
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
        }
        case RECEIVE_DATA_SUCCESS:
        return{
            ...state,
            todoArray: action.todoArray,
        }
        case RECEIVE_DATA_FAILD:
            return {
             ...state,
            }
        default:
            return state
    }

    
}

const roottodoReducer = combineReducers({
    form: formReducer,
    todos:todosReducer
})

export default roottodoReducer