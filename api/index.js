import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();
import authRouter from "./routes/auth.js";
import userRouter from "./routes/users.js";
import postRouter from "./routes/posts.js";
import commentRouter from "./routes/comments.js";
import likeRouter from "./routes/likes.js";
import followRouter from "./routes/fellowships.js";
import multer from "multer";

//middlewares
app.use((req, res, next) => {
  //because we made with credentials in auth/makes sure we send our cookies
  res.header("Access-Control-Allow-Credentials", true);
  next();
});
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(cookieParser());

//endpoint for uploading files
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../client/public/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});
const upload = multer({ storage });
app.post("/api/uploads", upload.single("file"), (req, res) => {
  const file = req.file;
  res.status(200).json(file.filename);
});
//api endpoints
app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/posts", postRouter);
app.use("/api/comments", commentRouter);
app.use("/api/likes", likeRouter);
app.use("/api/follow", followRouter);
app.listen(8800, () => {
  console.log("Hey there");
});
