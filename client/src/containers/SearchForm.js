import {connect} from 'react-redux'
import {searchWord,initializeForm,receivedSearchTodoSuccess,receivedSearchDataSuccess,receiveDataFaild,requestData} from '../actions/listActions'
import SearchFormComp from '../component/Search/SearchForm'


const mapStateToProps = (state) => {
    return{
        formSearch:state.searchForm.word,
    }

}

const mapDispatchProps = (dispatch) => {
    return{
        searchWord:(word) => {
            dispatch(searchWord(word))
        },
        initializeForm:() => {
            dispatch(initializeForm())
        },
        receivedSearchDataSuccess:(searchListArray) => {
            dispatch(receivedSearchDataSuccess(searchListArray))
        },
        receivedSearchTodoSuccess:(searchTodoArray) => {
            dispatch(receivedSearchTodoSuccess(searchTodoArray))
        },
        receiveDataFaild:() => {
            dispatch(receiveDataFaild())
        },
        requestData:() => {
            dispatch(requestData())
        } 
    }
}

const SearchForm = connect(
    mapStateToProps,
    mapDispatchProps
)(SearchFormComp)

export default SearchForm