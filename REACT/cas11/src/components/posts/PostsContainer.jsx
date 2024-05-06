import React, { useEffect, useState } from "react";
import { PostsComponent } from "./PostsComponent";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts,addPostToList } from "./duck/operations";

export default function PostsContainer() {
  const [newPost, setNewPost] = useState({ author: "", post: "" });
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.postsReducer.posts);
  const error = useSelector((state) => state.postsReducer.error);

  useEffect(() => {
    dispatch(fetchPosts(localStorage.getItem("token")));
  }, []);

  function addNewPost(){
    dispatch(addPostToList({token:localStorage.getItem("token"),post:newPost}));
    setNewPost({author:"",post:""});
  }

  return (
    <div id="posts-container">
      <input
        type="text"
        placeholder="Enter Author"
        value={newPost.author}
        onChange={(e) => {
          setNewPost({ ...newPost, author: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Enter Post"
        value={newPost.post}
        onChange={(e) => {
          setNewPost({ ...newPost, post: e.target.value });
        }}
      />
        <button onClick={addNewPost}>Add Post</button>
        <br/>
        <br/>
      {error && <h2>{error}</h2>}
      <PostsComponent posts={posts} />
    </div>
  );
}
