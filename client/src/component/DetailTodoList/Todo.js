import React, { Component } from 'react';
import DetailTodo from './DetailTodo';
import AddTodo from '../../containers/AddTodoForm';

class Todo extends Component {

  constructor(props){
    super(props)
    this.props = props
  }
  
  render() {
    //pathを取得
    const pathname = this.props.location.pathname
    //先頭のスラッシュを置換
    const location = pathname.replace(/\u002f/g, "");

    return (
      <div>
        <AddTodo location={location} />
      </div>
    );
  }
}

export default Todo;