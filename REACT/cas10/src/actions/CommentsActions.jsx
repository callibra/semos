import {FETCH_COMMENTS_SUCCESS,FETCH_COMMENTS_FAIL,DELETE_COMMENTS_SUCCESS,DELETE_COMMENTS_FAIL} from './../constants/CommentsConstants';
import axios from 'axios';

export const fetchCommentsSuccess = (comments) => { // comments -> Array(500)
    return{
        type:FETCH_COMMENTS_SUCCESS,
        payload:comments
    }
}

export const fetchCommentsFail = (error) => { // error message
    return{
        type:FETCH_COMMENTS_FAIL,
        payload:error
    }
}

export const fetchCommentsRequest = () => {
    return dispatch =>{
        axios.get('https://jsonplaceholder.typicode.com/comments') // povik do url za comments
                .then(result=>dispatch(fetchCommentsSuccess(result.data))) //ako e uspesen povikot pravime dispatch na akcija za comments success 
                .catch(error=>dispatch(fetchCommentsFail(error.message))) //ako e neuspesen povikot dispatch na akcija za fail
    }
}

export const deleteCommentsSuccess = (id) => {
    return{
        type:DELETE_COMMENTS_SUCCESS,
        payload: id
    }
}

export const deleteCommentsFail = (err) => {
    return{
        type:DELETE_COMMENTS_FAIL,
        payload:err
    }
}

export const deleteCommentsRequest = (id) => {
    return dispatch => {
        axios.delete('https://jsonplaceholder.typicode.com/comments/' + id)
                .then(res=>dispatch(deleteCommentsSuccess(id)))
                .catch(err=>dispatch(deleteCommentsFail(err.message)))
    }

}