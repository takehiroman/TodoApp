import React, { Component } from 'react';
import AddForm from './AddForm';
import TodoList from './TodoList';

class App extends Component {
  render() {
    return (
      <div>
        <h1>TodoApp</h1>
        <AddForm store={this.props.store} />
        <TodoList store={this.props.store} />
      </div>
    );
  }
}

export default App;
