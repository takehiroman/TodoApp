import { combineReducers } from 'redux'
import { TODOLIST, TODO, DATE, CHECK, KEYWORD, INITIALIZE_FORM, REQUEST_DATA, RECEIVE_SEARCH_DATA_SUCCESS, RECEIVE_SEARCH_TODO_SUCCESS, RECEIVE_TODO_DATA_SUCCESS, RECEIVE_DATA_SUCCESS, RECEIVE_DATA_FAILD } from '../actions/listActions'

//初期のstate
export const initialState = {
    form: {
        todoList: '',
    },
    todoLists: {
        todoListArray: [],
    },
    todoForm: {
        todo: '',
        limitDate: '',
        check: 0
    },
    todos: {
        isFetching: false,
        todoArray: [],
    },
    searchForm: {
        word: '',
    },
    searchLists: {
        searchListArray: [],
        searchTodoArray: []
    },
}
//formのreducer
const formReducer = (state = initialState.form, action) => {
    switch (action.type) {
        case TODOLIST:
            return {
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
const todosReducer = (state = initialState.todoLists, action) => {
    switch (action.type) {
        case REQUEST_DATA:
            return {
                ...state,
            }
        case RECEIVE_DATA_SUCCESS:
            return {
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

const todoFormReducer = (state = initialState.todoForm, action) => {
    switch (action.type) {
        case TODO:
            return {
                ...state,
                todo: action.todo,
            }
        case DATE:
            return {
                ...state,
                limitDate: action.limitDate
            }
        case INITIALIZE_FORM:
            return initialState.todoForm
        case CHECK:
            if (state.todo !== action.todo) {
                return { ...state }
            }
            return Object.assign({}, state, {
                checked: !state.checked
            })
        default:
            return state
    }
}

const todoReducer = (state = initialState.todos, action) => {
    switch (action.type) {
        case REQUEST_DATA:
            return {
                ...state,
            }
        case RECEIVE_TODO_DATA_SUCCESS:
            return {
                ...state,
                todoArray: action.todoArray,
            }
        case RECEIVE_DATA_FAILD:
            return {
                ...state,
            }
        case CHECK:
            return state.todoArray.map((t) =>
                todoFormReducer(t, action))

        default:
            return state
    }


}

const searchFormReducer = (state = initialState.searchForm, action) => {
    switch (action.type) {
        case KEYWORD:
            return {
                ...state,
                word: action.word
            }
        case INITIALIZE_FORM:
            return initialState.searchForm
        default:
            return state
    }
}
const searchListReducer = (state = initialState.searchLists, action) => {
    switch (action.type) {
        case REQUEST_DATA:
            return {
                ...state,
                isFetching: false
            }
        case RECEIVE_SEARCH_DATA_SUCCESS:
            return {
                ...state,
                searchListArray: action.searchListArray,
                isFetching: true
            }
        case RECEIVE_SEARCH_TODO_SUCCESS:
            return {
                ...state,
                searchTodoArray: action.searchTodoArray
            }
        case RECEIVE_DATA_FAILD:
            return {
                ...state,
            }
        default:
            return state
    }
}


const rootReducer = combineReducers({
    form: formReducer,
    todoLists: todosReducer,
    todoForm: todoFormReducer,
    todos: todoReducer,
    searchForm: searchFormReducer,
    searchLists: searchListReducer
})

export default rootReducer