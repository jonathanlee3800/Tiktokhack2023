/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const express = require("express");
const functions = require("firebase-functions");
require("dotenv").config();

// const { getAllCampaignsByUser } = require("./controllers/shelfController.js");



const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// app.get("/user/shelf/:userId", getAllCampaignsByUser);

// app.listen(port, async () => {
//   console.log(`Example app listening on port ${port}`);
// });

exports.app = functions.https.onRequest(app);


