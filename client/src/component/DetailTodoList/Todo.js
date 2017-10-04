import React, { Component } from 'react';
import AddTodoForm from './AddTodoForm';
import DetailTodo from './DetailTodo';
import todoReducer from  '../../reducers/Reducers'
import { createStore } from 'redux'

class Todo extends Component {
  
  render() {
    const store = createStore(todoReducer)
    return (
      <div>
        <AddTodoForm store={store} />
        <DetailTodo store={store} />
      </div>
    );
  }
}

export default Todo;