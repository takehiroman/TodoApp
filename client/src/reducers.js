import {  combineReducers } from 'redux'
import { TODO,INITIALIZE_FORM } from './actions'

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
        default:
            return state
    }
}

const rootReducer = combineReducers({
    form: formReducer,
    todos:todosReducer
})

export default rootReducer