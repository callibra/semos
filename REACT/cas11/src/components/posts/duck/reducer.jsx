import {
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAIL,
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  ADD_POST_FAIL
} from "./constants";

const initialState = {
  posts: [],
  error: undefined,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS_REQUEST:
      return {
        ...state,
      };
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload,
      };
    case GET_POSTS_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case ADD_POST_REQUEST:
      return{
        ...state
      }
    case ADD_POST_SUCCESS:
      console.log("ACTION PAYLOAD:",action.payload)
      return{
        ...state,
        posts:[...state.posts,action.payload.post],
        error:undefined
      }
    case ADD_POST_FAIL:
      return{
        ...state,
        error:action.payload
      }

    default:
      return state;
  }
}
