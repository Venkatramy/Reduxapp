import React from 'react';
import {addBookmark} from '../actions/index';
import {connect} from 'react-redux';
import NewBookmark from '../components/NewBookmark';
const mapDispatchToProps=dispatch=>{
    return{
        onAddBookmark:bookmark=>{
            dispatch(addBookmark(bookmark));
        }
    };
};
export default connect(
    null,
    mapDispatchToProps
)(NewBookmark);