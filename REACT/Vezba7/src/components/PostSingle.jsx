import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Comments } from "./Comments";

export const PostSingle = () => {
  const [details, setDetails] = useState({});
  const [detailsEdit, setDetailsEdit] = useState({});
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(true);
  const [edit, setEdit] = useState(false);
  const [loadingComments, setLoadingComments] = useState(false);
  const { postId } = useParams();

  useEffect(() => {
    if (postId) {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then((res) => setDetails(res.data))
        .catch((err) => {
          console.error("Error fetching post:", err);
          setDetails({});
        });
    }
  }, [postId]);

  function loadComments() {
    setLoadingComments(true); 
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((res) => {
        setComments(res.data);
        setLoadingComments(false); 
      })
      .catch((err) => {
        setLoadingComments(false);
        alert(err.message);
      });
  }

  function editFunction() {
    setEdit(true);
    setDetailsEdit(details);
  }

  async function save() {
    try {
      const editedItem = await axios.patch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`,
        { title: detailsEdit.title, body: detailsEdit.body }
      );
      setEdit(false);
      setDetails(editedItem.data);
      setDetailsEdit({});
      alert("Changes saved successfully!");
    } catch (error) {
      alert("Failed to save changes.");
    }
  }

  return (
    <div id="post-details">
      {edit ? (
        <>
          <input
            value={detailsEdit.title}
            onChange={(e) =>
              setDetailsEdit({ ...detailsEdit, title: e.target.value })
            }
          />
          <br />
          <br />
          <textarea
            rows={10}
            cols={20}
            value={detailsEdit.body}
            onChange={(e) =>
              setDetailsEdit({ ...detailsEdit, body: e.target.value })
            }
          />
          <br />
          <br />

          <button onClick={save}>Save</button>
          <button onClick={() => setEdit(false)}>Cancel</button>
        </>
      ) : (
        <>
          <h2>{details.title}</h2>
          <p>{details.body}</p>
          <button onClick={editFunction}>Edit</button>
        </>
      )}

      {loadingComments && <p>Loading...</p>}
      {!loadingComments && (
        <Comments
          loadComments={loadComments}
          comments={comments}
          setShowComments={() => {
            setShowComments(!showComments);
          }}
          showComments={showComments}
        />
      )}
    </div>
  );
};
