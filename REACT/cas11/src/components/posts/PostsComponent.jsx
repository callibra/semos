import React from "react";
import PropTypes from "prop-types";

export const PostsComponent = ({ posts }) => {
  return (
    <div id="posts">
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Author</th>
            <th>Post</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => {
            return (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.author}</td>
                <td>{post.post}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

PostsComponent.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};
