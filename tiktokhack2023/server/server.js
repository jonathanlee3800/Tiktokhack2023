const express = require("express");
require("dotenv").config();
const firebase = require("../server/firebase.js");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, async () => {
  console.log(`Example app listening on port ${port}`);
  const docRef = firebase.db.collection("users").doc("hi");
  await docRef.set({
    first: "Ada",
    last: "Lovelace",
    born: 1815,
  });
});
