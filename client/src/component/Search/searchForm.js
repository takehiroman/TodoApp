import React,{Component} from 'react'
import axios from 'axios'

class SearchForm extends Component{
    constructor(props){
        super(props)
        this.props = props
    }

    render(){
        return(
            <div>
           <input />
          <button type="submit">検索</button>
            </div>
        )
    }
}

export default SearchForm