// server.js
const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const port = 3001;

// Middleware to parse JSON body
app.use(express.json());

function setCorsHeaders(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST"); //, PUT, PATCH, DELETE
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
}

app.use(setCorsHeaders);

//handle requests

// i used get because i dont need to send body object and also because of semantic.
app.get("/hello/amjad", (req, res, next) => {
  res.json("Hello, Amjad");
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
