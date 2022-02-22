import { comments } from "../../../database/comments";

export default function handler (req, res) {
    const { commentId } = req.query;
    const comment = comments.find(comment => comment.id == Number(commentId));
    res.status(200).json(comment);
}