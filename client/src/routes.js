import {BrowserRouter,Switch, Route} from 'react-router-dom'
import App from './component/App'
import React from 'react'

export default (props) => (
  <BrowserRouter {...props}>
    <Switch>
        <Route exact path='/' component={App} />
    </Switch>
  </BrowserRouter>
)