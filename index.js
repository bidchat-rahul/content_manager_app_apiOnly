const express = require("express");
const app = express();
const PORT = 3001;

const path = require("path");
const fs = require("fs")
const pathToFile = path.resolve("./data.json");

app.get("/", (req, res) => {
  console.log('pathToFile', pathToFile)
  res.send("hello World")
});

app.get("/api/resources", (req, res) => {
  const stringfyData = fs.readFileSync(pathToFile);
  console.log(JSON.parse(stringfyData))
  res.send(JSON.parse(stringfyData));
});

app.listen(PORT, () => {
  console.log("server running" + PORT);
})
