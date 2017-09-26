export const TODO = 'TODO'
export const INITIALIZE_FORM = 'INITIALIZE_FORM'

//action creaters
export const addTodo = todo => ({
    type: TODO,
    todo,
}) 

export const initializeForm = () => ({
    type: INITIALIZE_FORM,
})