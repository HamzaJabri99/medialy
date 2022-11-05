import { db } from "../connect.js";
import jwt from "jsonwebtoken";
export const getPosts = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not Logged in");
  jwt.verify(token, "secretKey", (error, user) => {
    if (error) return res.status(403).json("Token isn't valid");

    const q = `SELECT p.*, u.id AS userId, name, profilePicture  FROM posts AS p JOIN users AS u on (u.id = p.userId)
    LEFT JOIN fellowships AS f on (p.userId = f.followedUserId) WHERE f.followerUserId= ? OR p.userId= ?
    ORDER BY p.createdAt DESC`;
    db.query(q, [user.id,user.id], (error, data) => {
      if (error) return res.status(500).json(error);
      return res.status(200).json(data);
    });
  });
};
