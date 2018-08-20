const express = require("express");
const parser = require("body-parser");
// const mongoose = require('./db/schema.js')

const app = express();

app.set("port", process.env.PORT || 3001);
app.use(parser.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(app.get("port"), () => {
  console.log("Locked and loaded on " + app.get("port"));
});
