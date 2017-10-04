import React, { Component } from 'react';
import DetailTodo from './DetailTodoList/DetailTodo'
import AddForm from './TodoList/AddForm';
import TodoList from './TodoList/TodoList';
import {Provider} from 'react-redux'
import {Route} from 'react-router-dom'

class App extends Component {
  
  render() {
    return (
      <div>
        <h1>TodoApp</h1>
        <AddForm store={this.props.store} />
        <TodoList  store={this.props.store} />
      </div>
    );
  }
}

export default App;
