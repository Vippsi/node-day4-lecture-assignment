const express = require("express");
const server = express();

const port = process.env.PORT || 5000;

server.get("/", (req, res) => {
  res.status(200).json("Hello from the new server");
});

server.listen(port, () => {
  console.log("server running");
});
