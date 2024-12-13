const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "public")));


app.get("/napoleon", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "napoleon.html"));
});

app.get("/constantinople", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "constantinople.html"));
});

app.get("/hercules", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "erekle.html"));
});

app.get("/david", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "david.html"));
});

app.get("/vachtang", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "vaxtang.html"));
});


app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
