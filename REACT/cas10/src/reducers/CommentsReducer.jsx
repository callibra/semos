import {FETCH_COMMENTS_SUCCESS,FETCH_COMMENTS_FAIL, DELETE_COMMENTS_SUCCESS,DELETE_COMMENTS_FAIL} from './../constants/CommentsConstants';

const initialState = {
    comments:[],
    error: undefined
}

const CommentsReducer = (state = initialState,action) => {

    switch(action.type){

        case FETCH_COMMENTS_SUCCESS:
            return{
                ...state,
                comments: action.payload
            }
        
        case FETCH_COMMENTS_FAIL:
            return{
                ...state,
                error: action.payload
            }
        case DELETE_COMMENTS_SUCCESS:
            return{
                ...state,
                comments: state.comments.filter(comment=> comment.id !== action.payload)
            }
        case DELETE_COMMENTS_FAIL:
            return{
                ...state
            }

        default: return state;
    }

}


export default CommentsReducer;