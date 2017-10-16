import React, { Component } from 'react';
import SearchForm from './searchForm';
import Searchlist from './searchList';

class Search extends Component {

  constructor(props){
    super(props)
    this.props = props
  }
  
  render() {
    return (
      <div>
        <SearchForm  />
        <Searchlist />
      </div>
    );
  }
}

export default Search;