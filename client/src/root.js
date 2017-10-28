import React, { Component } from 'react'
import Routes from './routes'
import { Provider } from 'react-redux'
import Store from './store'

class Root extends Component {
    constructor(props) {
        super(props)
        this.store = Store()
    }


    render() {
        return (
            <Provider store={this.store}>
                <Routes />
            </Provider>
        )
    }
}

export default Root
