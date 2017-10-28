import React, { Component } from 'react';
import SearchForm from '../../containers/SearchForm';
import Searchlist from '../../containers/SearchList';

class Search extends Component {

  constructor(props) {
    super(props)
    this.props = props
  }

  render() {
    return (
      <div>
        <SearchForm />
        <Searchlist />
      </div>
    );
  }
}

export default Search;