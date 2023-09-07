const express = require("express");
require("dotenv").config();
const firebase = require("../server/firebase.js");

const {db} = require("../server/firebase.js");

const { getAllCampaignsByUser } = require("./controllers/shelfController.js");



const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/user/shelf/:userId", getAllCampaignsByUser);

app.listen(port, async () => {
  console.log(`Example app listening on port ${port}`);
});


