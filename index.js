require('dotenv').config() // if there is a .env on the root folder it will merge it into process.env

const express = require("express");
const server = express();

const port = process.env.PORT || 5000;

server.get("/", (req, res) => {
    const message = process.env.MESSAGE || 'Hello from the new server'
  res.status(200).json({message});
});

server.listen(port, () => {
  console.log("server running");
});
