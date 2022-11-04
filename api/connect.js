import mysql from "mysql";
export const db = mysql.createConnection({
  host: "localhost",
  database: "medialy",
  user: "root",
  password: "PassWord",
});
