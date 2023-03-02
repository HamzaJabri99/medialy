import { db } from "../connect.js";
import jwt from "jsonwebtoken";
import moment from "moment";
export const getComments = (req, res) => {
  const q =
    "SELECT c.*, u.id AS userId,name, u.profilePicture AS profilePicture FROM comments AS c  JOIN users AS u ON (c.userId=u.id) WHERE c.postId=? ORDER BY c.createdAt DESC";
  db.query(q, [req.query.postId], (error, data) => {
    if (error) return res.status(500).json(error);
    return res.status(200).json(data);
  });
};
export const addComment = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("log in first");
  jwt.verify(token, "secretKey", (error, user) => {
    if (error) return res.status(403).json("invalid token");
    const q =
      "INSERT INTO comments (`description`,`createdAt`,`userId`,`postId`) VALUES (?)";
    const values = [
        req.body.description,
        moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
        user.id,
        req.body.postId
    ];
    db.query(q, [values], (error, data) => {
      if (error) return res.status(500).json(error);
      return res.status(200).json("comment posted");
    });
  });
};
