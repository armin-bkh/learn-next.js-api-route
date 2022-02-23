import { useRouter } from "next/router";
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
  return (
    <section>
      <p>
        {comment.id} {comment.text}
      </p>
    </section>
  );
};
export default CommentDetailPage;
