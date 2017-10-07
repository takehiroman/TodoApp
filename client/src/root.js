import React, {Component} from 'react'
import Routes from './routes'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import Store from './store'

class Root extends Component{
    constructor(props){
        super(props)
        this.store = Store()
    }


    render(){
        return(
            <Provider store={this.store}>
            <BrowserRouter>
                 <Routes />
            </BrowserRouter>
            </Provider>
        )
    }
}

export default Root
