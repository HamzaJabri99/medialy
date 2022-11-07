import jwt from "jsonwebtoken";
import { db } from "../connect.js";

export const getFollows = (req, res) => {
    const q = "SELECT followerUserId FROM fellowships WHERE followedUserId=?";
    db.query(q, [req.query.followedUserId], (error, data) => {
        if (error) return res.status(500).json(error);
        return res
            .status(200)
            .json(data.map((followship) => followship.followerUserId));
    });
};
export const addFollow = (req, res) => {
    const token = req.cookies.accessToken;
    if (!token) return res.status(401).json("Log in first");
    jwt.verify(token, "secretKey", (error, user) => {
        if (error) return res.status(403).json("Invalid Token");
        const q = "INSERT INTO fellowships (`followerUserId`,`followedUserId`) VALUES (?)";
        const values = [
            user.id,
            req.body.userId
        ]
        db.query(q, [values], (error, data) => {
            if (error) return res.status(500).json(error);
            return res.status(200).json("you followed this account");
        })
    })
};
export const deleteFollow = (req, res) => {
    const token = req.cookies.accessToken;
    if (!token) return res.status(401).json("Log in first");
    jwt.verify(token, "secretKey", (error, user) => {
        if (error) return res.status(403).json("Invalid Token");
        const q = "DELETE FROM fellowships WHERE `followerUserId` = ? AND `followedUserId` = ?";
        db.query(q, [user.id, req.query.userId], (error, data) => {
            if (error) return res.status(500).json(error);
            return res.status(200).json("you unfollowed this account");
        })
    })
};
