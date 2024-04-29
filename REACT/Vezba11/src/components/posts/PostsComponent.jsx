import React, { useState } from "react";
import PropTypes from "prop-types";
import "../posts/css/PostsComponent.css";

export const PostsComponent = ({
  posts,
  setPatchPost,
  patchPost,
  changePost,
  deletePost,
}) => {
  const [postId, setPostId] = useState("");
  const [deleteSuccess, setDeleteSuccess] = useState(false);
  const [updateSuccess, setUpdateSuccess] = useState(false);

  const handleDeletePost = async (postId) => {
    try {
      await deletePost(postId);
      setDeleteSuccess(true);
      setTimeout(() => {
        setDeleteSuccess(false);
      }, 3000);
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  const handleUpdatePost = (postId, post) => {
    setPostId(postId);
    setPatchPost({
      ...patchPost,
      author: post.author,
      post: post.post,
      id: post.id,
    });
  };

  return (
    <div id="posts">
      {deleteSuccess && <p className="delete-message">Post successfully deleted.</p>}
      {updateSuccess && <p className="success-message">Post successfully updated.</p>}
      <table className="posts-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Author</th>
            <th>Post</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => {
            return (
              <tr key={post.id}>
                {postId === post.id ? (
                  <>
                    <td>{post.id}</td>
                    <td>
                      <input
                        type="text"
                        placeholder="Enter Author"
                        value={patchPost.author}
                        onChange={(e) => {
                          setPatchPost({
                            ...patchPost,
                            author: e.target.value,
                          });
                        }}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        placeholder="Enter Post"
                        value={patchPost.post}
                        onChange={(e) => {
                          setPatchPost({ ...patchPost, post: e.target.value });
                        }}
                      />
                    </td>
                    <td>
                      <button
                        className="save-button"
                        onClick={() => {
                          changePost();
                          setPostId("");
                          setUpdateSuccess(true);
                          setTimeout(() => {
                            setUpdateSuccess(false);
                          }, 3000);
                        }}
                      >
                        Save
                      </button>
                    </td>
                  </>
                ) : (
                  <>
                    <td>{post.id}</td>
                    <td>{post.author}</td>
                    <td>{post.post}</td>
                    <td>
                      <button
                        className="update-button"
                        onClick={() => handleUpdatePost(post.id, post)}
                      >
                        Update
                      </button>
                      <button
                        className="delete-button"
                        onClick={() => handleDeletePost(post.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </>
                )}
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
  setPatchPost: PropTypes.func.isRequired,
  patchPost: PropTypes.object.isRequired,
  changePost: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
};

export default PostsComponent;


