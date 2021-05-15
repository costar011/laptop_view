import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import mysql from "mysql2";

const PORT = 7000;
const app = express();

const conn = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "fourleaf0309",
  port: "3308",
  database: "academy",
});

app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "/assets")));
app.use(helmet());
app.use(morgan(`dev`));

app.get("/", (req, res) => {
  const sql = `
    SELECT		latop_no,
			    model_name,
			    menufachure,
			    color,
			    inch,
			    cpu,
			    price,
      FROM      laptop`;
  conn.query(sql, (error, rows) => {
    res.render("home", { laptops: rows });
  });
});

app.listen(PORT, () => {
  console.log(`✅ ${PORT} SERVER START`);
});
