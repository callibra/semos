import {
  fetchPostsRequest,
  fetchPostsSuccess,
  fetchPostsFail,
  addPostRequest,
  addPostSuccess,
  addPostFail
} from "./actions";
import { getPosts,addPost } from "./../../../api/postsApi";

export const fetchPosts = (requestParams) => {
  return (dispatch) => {
    dispatch(fetchPostsRequest(requestParams));
    return getPosts(requestParams)
      .then((res) => {
        dispatch(fetchPostsSuccess(res));
        return res;
      })
      .catch((err) => {
        dispatch(fetchPostsFail(err.message));
        return err;
      });
  };
};

export const addPostToList = (requestParams) =>{
    return (dispatch) => {
        dispatch(addPostRequest(requestParams));
        return addPost(requestParams)
          .then((res) => {
            dispatch(addPostSuccess(res));
            return res;
          })
          .catch((err) => {
            dispatch(addPostFail(err.message));
            return err.message;
          });
      };
}
