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
export const updateUser = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Login First");
  jwt.verify(token, "secretKey", (error, user) => {
    if (error) return res.status(403).json("Invalid Token");
    const q = "UPDATE users SET `name` = ? , `coverPicture` = ? , `profilePicture` = ?, `city` = ?, `website` = ? WHERE id=?";
    db.query(q, [req.body.name,
    req.body.coverPicture,
    req.body.profilePicture,
    req.body.city,
    req.body.website,
    user.id], (error, data) => {
      if (error) return res.status(500).json(error);
      if (data.affectedRows > 0) return res.status(200).json(data);
      return res.status(403).json("unauthorized!!");

    })
  })
}