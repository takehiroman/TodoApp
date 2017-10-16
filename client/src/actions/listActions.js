export const TODOLIST = 'TODOLIST'
export const DAY = 'DAY'
export const TODO = 'TODO'
export const CHECK = 'CHECK'
export const INITIALIZE_FORM = 'INITIALIZE_FORM'
export const REQUEST_DATA = 'REQUEST_DATA'
export const RECEIVE_DATA_SUCCESS = 'RECEIVE_DATA_SUCCESS'
export const RECEIVE_TODO_DATA_SUCCESS = 'RECEIVE_TODO_DATA_SUCCESS'
export const RECEIVE_DATA_FAILD = 'RECEIVE_DATA_FAILD'

//action creaters
export const addTodo = todoList => ({
    type: TODOLIST,
    todoList,
})

export const addDay = limitDay => ({
    type: DAY,
    limitDay,
})

export const addTodos = todo => ({
    type:TODO,
    todo,
})

export const checkTodo = () => ({
    type:CHECK,
})

export const requestData = () => ({
    type:REQUEST_DATA,
})

export const receivedDataSuccess = todoListArray => ({
    type:RECEIVE_DATA_SUCCESS,
    todoListArray,
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