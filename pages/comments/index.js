import { useState } from "react";

const CommentsListPage = () => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  const fetchCommentsHandler = async () => {
    const response = await fetch("/api/comments");
    const data = await response.json();
    setComments(data);
  };

  const submitCommentHandler = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ comment }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if(!comments.length) return;
    setComments([...comments, data]);
  };

  return (
    <>
      <form onSubmit={submitCommentHandler}>
        <input value={comment} onChange={(e) => setComment(e.target.value)} />
        <button type="submit">submit comment</button>
      </form>
      <button type="button" onClick={fetchCommentsHandler}>
        load comments
      </button>
      {comments.length > 0 && (
        <ul>
          {comments.map((comment) => (
            <li key={comment.id}>
              <h2>{comment.text}</h2>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default CommentsListPage;
