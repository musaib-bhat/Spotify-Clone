const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(__dirname));                 // frontend
app.use("/Songs", express.static(path.join(__dirname, "Songs"))); // music

app.listen(3000, () => {
  console.log("Server running at http://127.0.0.1:3000");
});
