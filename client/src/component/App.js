import React, { Component } from 'react';
import AddForm from './AddForm';
import TodoList from './TodoList';

class App extends Component {
  render() {
    return (
      <div>
        <AddForm store={this.props.store} />
        <TodoList store={this.props.store} />
      </div>
    );
  }
}

export default App;
