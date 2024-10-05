// server.js
const express = require("express");
const path = require("path");
const fs = require("fs");
const fastcsv = require("fast-csv");

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

app.get("/allprofiles", (req, res, next) => {
  const profiles = [];
  fs.createReadStream(path.join(__dirname, "profile.csv"))
    .pipe(fastcsv.parse({ headers: true }))
    .on("data", (row) => profiles.push(row))
    .on("end", () => res.json(profiles))
    .on("error", (error) => res.status(500).send("Error reading the CSV file"));
});

app.post("/profile", (req, res, next) => {
  const { Name, Title, TargetedKeywords, Education, Certification, Contact } =
    req.body;
  if (
    !(
      Name &&
      Title &&
      TargetedKeywords &&
      Education &&
      Certification &&
      Contact
    )
  ) {
    res.json("Object Does not meet the requirements").status(400);
  } else {
    fs.writeFileSync(
      path.join(__dirname, "profile.json"),
      JSON.stringify(
        { Name, Title, TargetedKeywords, Education, Certification, Contact },
        null,
        2
      ),
      { flag: "a" } // Append to file
    );
    res.json("Successfully Received");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
