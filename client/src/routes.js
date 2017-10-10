import {BrowserRouter,Switch, Route} from 'react-router-dom'
import App from './component/App'
import React from 'react'
import Todo from './component/DetailTodoList/Todo'

export default (props) => (
  <BrowserRouter {...props}>
    <div>
        <Route exact={true} path='/' component={App} />
        <Route path='/:_id' component={Todo} />
    </div>
  </BrowserRouter>
)