const profile = require("./routes/profile");
const password = require("./routes/password");
const express = require("express");
import bodyParser from "body-parser";

module.exports = function(app) {
  app.use(express.json());
  app.use(bodyParser.json());
  app.use(express.static("build/public"));
  app.use("/profile", profile);
  app.use("/password", password);
};
