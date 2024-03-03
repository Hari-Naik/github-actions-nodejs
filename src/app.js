const express = require("express");

const app = express();

app.get("/testNode", (req, res) => {
  res.status(200).send("yes the testNode endpoint works");
});

module.exports = app;
