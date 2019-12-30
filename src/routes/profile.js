const express = require("express");
const router = express.Router();
const profile = require("../controllers/profile");
import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router";
import App from "../app";

router.get("/", async (req, res) => {
  const context = {};

  const content = ReactDOMServer.renderToString(
    <StaticRouter>
      <App />
    </StaticRouter>
  );

  const html = `
      <html>
          <head>
              <link 
                  rel="stylesheet" 
                  href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" 
                  integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" 
                  crossorigin="anonymous"
              >
          </head>
          <body style="height: 100vh;">
              <div id="root"> 
                  ${content}
              <div>
              <script src="client_bundle.js" ></script>
          </body>
      </html>
      `;

  res.send(html);
});

router.post("/", async (req, res) => {
  const response = await profile.adduser(req.body);

  if (response.error) {
    res.status(500).send(response.error);
  } else {
    res.send(response);
  }
});

module.exports = router;
