import morgan from "morgan";
import express from "express";
import helmet from "helmet";
import path from "path";

const app = express();
const PORT = 3000;
// 개발자영어 : req 요청하다, res 응답하다 rander 구성하다,그리다 등등 send 보내다

app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "/assets")));
app.use(helmet());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(PORT, () => {
  console.log(`✅ Server Start PORT`);
});
