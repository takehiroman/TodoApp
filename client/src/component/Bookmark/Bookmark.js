import React, { Component } from 'react';
import BookmarkList from '../../containers/BookmarkList'

class Bookmark extends Component {

  constructor(props) {
    super(props)
    this.props = props
  }

  render() {
    return (
      <div>
        <p>ブックマークページです</p>
        <BookmarkList />
      </div>
    );
  }
}

export default Bookmark;