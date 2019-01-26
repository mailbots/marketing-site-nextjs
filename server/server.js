require("dotenv").config();
const express = require("express");
const app = express();
const moment = require("moment");
const mysql = require("promise-mysql");
const bodyParser = require("body-parser");

// Zeit now has no server logs...let's make some
app.use(function createServerLog(req, res, next) {
  const d = new Date();
  console.log(`${d.toISOString()} ${req.ip} ${req.method} ${req.originalUrl}`);
  next();
});

app.use(bodyParser.json());
app.use(express.static("./dist"));

app.post("/subscribe", async (req, res) => {
  try {
    console.log("posted", req.body);

    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME
    });

    if (!req.body.email) {
      return res.send(400, "Email was not received!");
    }
    const insertJson = { email: req.body.email };

    //prettier-ignore
    const dbRes = await connection.query("insert into preview_signups set ?", insertJson);
    console.log("results: ", dbRes);
    res.send({ success: true });
  } catch (e) {
    console.log(e.message);
    return res.send(500, e.message);
  }
});

let port = process.env.port || 3002;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});
