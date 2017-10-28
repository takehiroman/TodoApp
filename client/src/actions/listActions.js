export const TODOLIST = 'TODOLIST'
export const DATE = 'DATE'
export const TODO = 'TODO'
export const CHECK = 'CHECK'
export const KEYWORD = 'KEYWORD'
export const INITIALIZE_FORM = 'INITIALIZE_FORM'
export const REQUEST_DATA = 'REQUEST_DATA'
export const RECEIVE_DATA_SUCCESS = 'RECEIVE_DATA_SUCCESS'
export const RECEIVE_TODO_DATA_SUCCESS = 'RECEIVE_TODO_DATA_SUCCESS'
export const RECEIVE_SEARCH_TODO_SUCCESS = 'RECEIVE_SEARCH_TODO_SUCCESS'
export const RECEIVE_SEARCH_DATA_SUCCESS = 'RECEIVE_SEARCH_DATA_SUCCESS'
export const RECEIVE_DATA_FAILD = 'RECEIVE_DATA_FAILD'

//action creaters
export const addTodo = todoList => ({
    type: TODOLIST,
    todoList,
})

export const addDate = limitDate => ({
    type: DATE,
    limitDate,
})

export const addTodos = todo => ({
    type:TODO,
    todo,
})

export const searchWord = word => ({
    type:KEYWORD,
    word,
})

export const checkTodo = (todo) => ({
    type:CHECK,
    todo
})

export const requestData = () => ({
    type:REQUEST_DATA,
})

export const receivedDataSuccess = todoListArray => ({
    type:RECEIVE_DATA_SUCCESS,
    todoListArray,
})

export const receivedSearchDataSuccess = searchListArray => ({
    type:RECEIVE_SEARCH_DATA_SUCCESS,
    searchListArray
})
export const receivedSearchTodoSuccess = searchTodoArray => ({
    type:RECEIVE_SEARCH_TODO_SUCCESS,
    searchTodoArray
})

export const receivedTodoDataSuccess = todoArray => ({
    type:RECEIVE_TODO_DATA_SUCCESS,
    todoArray,
})

export const receiveDataFaild = () => ({
    type:RECEIVE_DATA_FAILD,
})

export const initializeForm = () => ({
    type: INITIALIZE_FORM,
})