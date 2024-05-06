import { GET_POSTS_REQUEST,GET_POSTS_SUCCESS,GET_POSTS_FAIL,ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAIL, UPDATE_POST_REQUEST, UPDATE_POST_SUCCESS, UPDATE_POST_FAIL, DELETE_POST_REQUEST, DELETE_POST_SUCCESS, DELETE_POST_FAIL,
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
      return {
        ...state,
      };
    case ADD_POST_SUCCESS:
      return {
        ...state,
        posts: [...state.posts, action.payload.post],
        error: undefined,
      };
    case ADD_POST_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case UPDATE_POST_REQUEST:
      return {
        ...state,
      };
    case UPDATE_POST_SUCCESS:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post.id === action.payload.id ? { ...post, ...action.payload } : post
        ),
      };
    case UPDATE_POST_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case DELETE_POST_REQUEST:
      return {
        ...state,
      };
    case DELETE_POST_SUCCESS:
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload),
        error: undefined,
      };
    case DELETE_POST_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}
