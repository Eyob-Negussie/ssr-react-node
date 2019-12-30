import "babel-polyfill";
import express from "express";
const app = express();

require("./src/route")(app);
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`SSR running on port ${PORT}`);
});
