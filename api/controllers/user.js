import { db } from "../connect.js";
import jwt from "jsonwebtoken";
export const getUser = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Log In First");
  jwt.verify(token, "secretKey", (error, user) => {
    if (error) return res.status(403).json("Invalid Token");
    const q = "SELECT * FROM users WHERE id= ?";
    db.query(q, [req.params.userId], (error, data) => {
      const { password, ...info } = data[0];
      if (error) return res.status(500).json(error);
      return res.status(200).json(info);
    });
  });
};
