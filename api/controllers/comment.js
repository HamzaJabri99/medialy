import { db } from "../connect.js"
export const getComments=(req,res)=>{
const q="SELECT c.*, u.profilePicture AS profilePicture FROM comments AS c  JOIN users AS u on (c.userId=u.id) WHERE postId=?"
db.query(q,[req.query.postId],(error,data)=>{
    if(error) return res.status(500).json(error);
    return res.status(200).json(data);
})
}