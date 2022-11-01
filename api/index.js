import express from "express";
import mysql from "mysql";
import authRouter from "./routes/auth.js";
import userRouter from "./routes/users.js";
import postRouter from "./routes/posts.js";
import commentRouter from "./routes/comments.js";
import likeRouter from "./routes/likes.js";
const app = express();
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "PassWord",
  database: "medialy",
});
app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/posts", postRouter);
app.use("/api/comments", commentRouter);
app.use("/api/likes", likeRouter);
app.listen(8800, () => {
  console.log("Hey there");
});
