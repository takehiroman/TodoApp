export const TODO = 'TODO'
export const INITIALIZE_FORM = 'INITIALIZE_FORM'
export const REQUEST_DATA = 'REQUEST_DATA'
export const RECEIVE_DATA_SUCCESS = 'RECEIVE_DATA_SUCCESS'
export const RECEIVE_DATA_FAILD = 'RECEIVE_DATA_FAILD'

//action creaters
export const addTodo = todo => ({
    type: TODO,
    todo,
})

export const requestData = () => ({
    type:REQUEST_DATA,
})

export const receivedDataSuccess = todoArray => ({
    type:RECEIVE_DATA_SUCCESS,
    todoArray,
})

export const receiveDataFaild = () => ({
    type:RECEIVE_DATA_FAILD,
})

export const initializeForm = () => ({
    type: INITIALIZE_FORM,
})