var admin = require("firebase-admin");
const {
  getFirestore,
  Timestamp,
  FieldValue,
  Filter,
} = require("firebase-admin/firestore");
require("dotenv").config();

const credentials = JSON.parse(process.env.creds);
const callapp = admin.initializeApp({
  credential: admin.credential.cert(credentials),
});

const db = getFirestore();

module.exports = { callapp, db };
