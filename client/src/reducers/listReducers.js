import {  combineReducers } from 'redux'
import { TODOLIST,TODO,DAY, INITIALIZE_FORM,REQUEST_DATA,RECEIVE_TODO_DATA_SUCCESS,RECEIVE_DATA_SUCCESS,RECEIVE_DATA_FAILD } from '../actions/listActions'

//初期のstate
export const initialState = {
  form:{  todoList: '',
  },
  todoLists: {
      todoListArray: [],
  },
   todoForm:{
       todo: '',
       limitDay:''
   },
   todos:{
       todoArray:[]
   },
}
//formのreducer
const formReducer = (state = initialState.form,action) => {
    switch (action.type){
        case TODOLIST:
            return{
                ...state,
                todoList: action.todoList,
            }
        case INITIALIZE_FORM:
            return initialState.form
        default:
            return state
    }
}
//todoのreducer
const todosReducer = (state = initialState.todoLists,action) => {
    switch (action.type){
        case REQUEST_DATA:
        return{
            ...state,
        }
        case RECEIVE_DATA_SUCCESS:
        return{
            ...state,
            todoListArray: action.todoListArray,
        }
        case RECEIVE_DATA_FAILD:
            return {
             ...state,
        }
        default:
            return state
    }

    
}

const todoFormReducer = (state = initialState.todoForm,action) => {
    switch (action.type){
        case TODO:
            return{
                ...state,
                todo:action.todo
            }
        case DAY:
            return{
                ...state,
                limitDay:action.limitDay
            }
            case RECEIVE_TODO_DATA_SUCCESS:
            return{
                ...state,
                todoArray: action.todoArray,
            }
            case RECEIVE_DATA_FAILD:
                return {
                 ...state,
            }
        case INITIALIZE_FORM:
            return initialState.todoForm
        default:
            return state
    }
}

const rootReducer = combineReducers({
    form: formReducer,
    todoLists:todosReducer,
    todoForm: todoFormReducer
})

export default rootReducer