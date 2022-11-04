import { db } from "../connect.js";
import bcrypt from "bcryptjs";
export const register = (req, res) => {
    //check if user exists
  const q = "SELECT * FROM users WHERE username = ?";
  db.query(q, [req.body.username], (error, data) => {
    if (error) return res.status(500).json(error);
    if(data.length) return res.status(409).json("user already exists!");
    //hash the password
     const salt =bcrypt.genSaltSync(10);
     const hashedPassword=bcrypt.hashSync(req.body.password,salt);
    //create user
     const q ="INSERT INTO users (`username`,`email`,`password`,`name`,`coverPicture`,`profilePicture`,`city`,`website`) VALUES (?)";
     const values=[
        req.body.username,
        req.body.email,
        hashedPassword,
        req.body.name,
        req.body.coverPicture,
        req.body.profilePicture,
        req.body.city,
        req.body.website,
     ];
     db.query(q,[values],(error,data)=>{
        if(error) return res.status(500).json("something went wrong");
        return res.status(200).json("user has been registerd!");
     })
  });


};
export const login = (req, res) => {

};
export const logout = (req, res) => {};
