import { db } from "../connect.js";
import jwt from "jsonwebtoken";
export const getLikes = (req, res) => {
  const q = "SELECT userId FROM likes WHERE postId = ?";
  db.query(q, [req.query.postId], (error, data) => {
    if (error) return res.status(500).json(error);
    return res.status(200).json(data.map((like) => like.userId));
  });
};
export const addLike = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Log in First");
  jwt.verify(token, "secretKey", (error, user) => {
    if (error) return res.status(403).json(error);
    const q = "INSERT INTO likes (`userId`,`postId`) VALUES (?)";
    const values = [user.id, req.body.postId];
    db.query(q, [values], (error, data) => {
      if (error) return res.status(500).json(error);
      return res.status(200).json("you Liked this Post");
    });
  });
};
export const deleteLike = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Log in first");
  jwt.verify(token, "secretKey", (error, user) => {
    if (error) return res.status(403).json(error);
    const q = "DELETE FROM LIKES WHERE `userId` = ? AND `postId` = ?";
    const values = [user.id, req.body.postId];
    db.query(q, [values], (error, data) => {
      if (error) return res.status(500).json(error);
      return res.status(200).json("you removed your like");
    });
  });
};
