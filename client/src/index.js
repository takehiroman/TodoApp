import React from 'react'
import ReactDOM from 'react-dom'
import App from './component/App'
import {BrowserRouter,Route} from 'react-router-dom'
import DetailTodo from './component/DetailTodoList/DetailTodo'
import store from './store'

this.store = store()
const render = () => {
    ReactDOM.render(
        <div>
        <App store={this.store} />
        </div>,
        document.getElementById('root')
    );
}

this.store.subscribe(() => {
    render()
})
render()



