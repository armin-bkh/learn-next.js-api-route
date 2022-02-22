import { comments } from "../../../database/comments";

export default function handler(req, res){
    if(req.method === "GET"){
        res.status(200).json(comments);
        return;
    }
    if(req.method === "POST"){
        const text = req.body.comment;
        const newComment = {
            id: Date.now(),
            text
        }
        res.status(201).json(newComment);
        comments.push(newComment);
        return;
    }
}