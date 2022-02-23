import { comments } from "../../../database/comments";

export default function handler(req, res) {
  const { commentId } = req.query;
  const comment = comments.find((comment) => comment.id === Number(commentId));
  const index = comments.findIndex(
    (comment) => comment.id === Number(commentId)
  );
  if (req.method === "GET") {
    res.status(200).json(comment);
  } else if (req.method === "DELETE") {
    comments.splice(index, 1);
    res.status(200).json(comment);
  } else if (req.method === "PUT"){
    const text = req.body.comment;
    const updatedComment = {
      id: Number(commentId),
      text,
    }
    comments.splice(index, 1, updatedComment);
    res.status(200).json(updatedComment);
  }
}
