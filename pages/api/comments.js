import { comments } from "../../database/comments";

export default function handler(req, res){
    res.status(200).json(comments)
}