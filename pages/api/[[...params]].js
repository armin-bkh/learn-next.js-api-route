export default function Handler(req, res){
    const { params } = req.query;
    res.status(200).json(params);
}