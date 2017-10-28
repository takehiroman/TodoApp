import { connect } from 'react-redux'
import { receivedSearchDataSuccess, receivedSearchTodoSuccess, receiveDataFaild, requestData } from '../actions/listActions'
import SearchListComp from '../component/Search/SearchList'


const mapStateToProps = (state) => {
    return {
        searchList: state.searchLists.searchListArray,
        searchTodo: state.searchLists.searchTodoArray,
        Fetching: state.searchLists.isFetching
    }

}

const mapDispatchProps = (dispatch) => {
    return {
        receivedSearchDataSuccess: (searchListArray) => {
            dispatch(receivedSearchDataSuccess(searchListArray))
        },
        receivedSearchTodoSuccess: (searchTodoArray) => {
            dispatch(receivedSearchTodoSuccess(searchTodoArray))
        },
        receiveDataFaild: () => {
            dispatch(receiveDataFaild())
        },
        requestData: () => {
            dispatch(requestData())
        }
    }
}

const SearchList = connect(
    mapStateToProps,
    mapDispatchProps
)(SearchListComp)

export default SearchList