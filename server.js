import "babel-polyfill";
import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router";
import App from "./src/app";
import Profile from "./src/pages/profile";
import bodyParser from "body-parser";

const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static("build/public"));

app.get("/profile", (req, res) => {
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

app.get("/password", (req, res) => {
  const context = {};

  const content = ReactDOMServer.renderToString(
    <StaticRouter>
      <App url={"password"} />
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

app.listen(PORT, () => {
  console.log(`SSR running on port ${PORT}`);
});
