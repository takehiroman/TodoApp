import React, { Component } from 'react';
import AddForm from '../containers/AddForm';
import TodoList from '../containers/TodoList';

class App extends Component {
  
  render() {
    return (
      <div>
        <h1>TodoApp</h1>
        <AddForm  />
        <TodoList   />
      </div>
    );
  }
}

export default App;
