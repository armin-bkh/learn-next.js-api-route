import { useState } from "react";
import EditCommentForm from "../../components/EditCommentForm";
import { comments } from "../../database/comments";

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { commentId: "1" } },
      { params: { commentId: "2" } },
      { params: { commentId: "3" } },
    ],
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { commentId } }) => {
  const comment = comments.find((comment) => comment.id === Number(commentId));

  return {
    props: {
      comment,
    },
  };
};

const CommentDetailPage = ({ comment }) => {
  const [commentData, setCommentData] = useState(comment);

  const editCommentHandler = async (value) => {
    const response = await fetch(`/api/comments/${commentData.id}`, {
      method: "PUT",
      body: JSON.stringify({ comment: value }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setCommentData(data);
  };

  return (
    <section>
      <p>
        {commentData.id} {commentData.text}
      </p>
      <EditCommentForm
        comment={commentData.text}
        handleSubmit={editCommentHandler}
      />
    </section>
  );
};
export default CommentDetailPage;
