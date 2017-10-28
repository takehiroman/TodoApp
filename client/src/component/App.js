import React, { Component } from 'react';
import AddForm from '../containers/AddForm';
import TodoList from '../containers/TodoList';

class App extends Component {

  render() {
    return (
      <div>
        <AddForm />
        <TodoList />
      </div>
    );
  }
}

export default App;
