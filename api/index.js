import express from "express";
import mysql from "mysql";
const app = express();
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "PassWord",
  database: "medialy",
});
app.get("/", (req, res) => {
  return res.json("Hey");
});
app.get("/users", (req, res) => {
  const q = "select*from users";
  db.query(q, (data, error) => {
    if (error) return res.json(error);
    if (data.length === 0) return res.status(404).json("user doesn't exists");
    return res.json(data);
  });
});

app.listen(8800, () => {
  console.log("Hey there");
});
