import { connect } from 'react-redux'
import { receivedBookmarkDataSuccess,  receiveDataFaild, requestData } from '../actions/listActions'
import BookmarkListComp from '../component/Bookmark/BookmarkList'


const mapStateToProps = (state) => {
    return {
        bookmarkList:state.bookmarkLists.bookmarkListArray
    }

}

const mapDispatchProps = (dispatch) => {
    return {
        receivedBookmarkDataSuccess: (bookmarkListArray) => {
            dispatch(receivedBookmarkDataSuccess(bookmarkListArray))
        },
        receiveDataFaild: () => {
            dispatch(receiveDataFaild())
        },
        requestData: () => {
            dispatch(requestData())
        }
    }
}

const BookmarkList = connect(
    mapStateToProps,
    mapDispatchProps
)(BookmarkListComp)

export default BookmarkList