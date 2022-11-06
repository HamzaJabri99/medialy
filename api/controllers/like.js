import { db } from "../connect.js";
export const getLikes = (req, res) => {
  const q = "SELECT userId FROM likes WHERE postId = ?";
  db.query(q, [req.query.postId], (error, data) => {
    if (error) return res.status(500).json(error);
    return res.status(200).json(data.map((like) => like.userId));
  });
};
export const addLike = (req, res) => {};
