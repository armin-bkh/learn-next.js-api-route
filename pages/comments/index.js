import { useState } from "react";

const CommentsListPage = () => {
  const [comments, setComments] = useState([]);

  const fetchCommentsHandler = async () => {
    const response = await fetch("/api/comments");
    const data = await response.json();
    console.log(data);
    setComments(data);
  };

  return (
    <>
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
