import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();
import authRouter from "./routes/auth.js";
import userRouter from "./routes/users.js";
import postRouter from "./routes/posts.js";
import commentRouter from "./routes/comments.js";
import likeRouter from "./routes/likes.js";

//middlewares
app.use((req,res,next)=>{
  //because we made with credentials in auth/makes sure we send our cookies
  res.header("Access-Control-Allow-Credentials",true);
  next();
})
app.use(express.json());
app.use(cors({
  origin:"http://localhost:3000",
}));
app.use(cookieParser());


//api endpoints
app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/posts", postRouter);
app.use("/api/comments", commentRouter);
app.use("/api/likes", likeRouter);
app.listen(8800, () => {
  console.log("Hey there");
});
