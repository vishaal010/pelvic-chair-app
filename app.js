const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

// Express Middleware for serving static files
app.use("/public", express.static(__dirname + "/public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
