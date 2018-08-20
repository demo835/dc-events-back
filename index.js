const express = require("express");
const parser = require("body-parser");
// const mongoose = require('./db/schema.js')
const Event = require("./db/models/Event");
const Venue = require("./db/models/Venue");

const app = express();

app.set("port", process.env.PORT || 3001);
app.use(parser.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/add-event", (req, res) => {
  res.send("Events");
});

app.listen(app.get("port"), () => {
  console.log("Locked and loaded on " + app.get("port"));
});
