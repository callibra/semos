import { GET_POSTS_REQUEST, GET_POSTS_SUCCESS,GET_POSTS_FAIL,ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAIL, UPDATE_POST_FAIL, UPDATE_POST_REQUEST,UPDATE_POST_SUCCESS, DELETE_POST_REQUEST, DELETE_POST_SUCCESS,DELETE_POST_FAIL,
} from "./constants";

export const fetchPostsRequest = (requestParams) => {
  return {
    type: GET_POSTS_REQUEST,
    payload: requestParams,
  };
};

export const fetchPostsSuccess = (posts) => {
  return {
    type: GET_POSTS_SUCCESS,
    payload: posts,
  };
};

export const fetchPostsFail = (error) => {
  return {
    type: GET_POSTS_FAIL,
    payload: error,
  };
};

export const addPostRequest = (requestParams) => {
  return {
    type: ADD_POST_REQUEST,
    payload: requestParams,
  };
};

export const addPostSuccess = (post) => {
  return {
    type: ADD_POST_SUCCESS,
    payload: post,
  };
};

export const addPostFail = (error) => {
  return {
    type: ADD_POST_FAIL,
    payload: error,
  };
};

export const patchPostRequest = (reqParams) => {
  return {
    type: UPDATE_POST_REQUEST,
    payload: reqParams,
  };
};

export const patchPostSuccess = (data) => {
  return {
    type: UPDATE_POST_SUCCESS,
    payload: data,
  };
};

export const patchPostFail = (error) => {
  return {
    type: UPDATE_POST_FAIL,
    payload: error,
  };
};

export const deletePostRequest = (requestParams) => {
  return {
    type: DELETE_POST_REQUEST,
    payload: requestParams,
  };
};

export const deletePostSuccess = (postId) => {
  return {
    type: DELETE_POST_SUCCESS,
    payload: postId,
  };
};

export const deletePostFail = (error) => {
  return {
    type: DELETE_POST_FAIL,
    payload: error,
  };
};
