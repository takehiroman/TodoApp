import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from './component/App'
import React from 'react'
import Todo from './component/DetailTodoList/Todo'
import Search from './component/Search/Search'
import Header from './component/Header'
import Bookmark from './component/Bookmark/Bookmark'
import Error from './Error'

export default (props) => (
  <BrowserRouter {...props}>
    <div>
      <Header />
      <Switch>
        <Route exact={true} path='/' component={App} />
        <Route path='/search' component={Search} />
        <Route path='/bookmark' component={Bookmark} />
        <Route path='/:_id' component={Todo} />
        <Route path="*" component={Error} notFound />
      </Switch>
    </div>
  </BrowserRouter>
)