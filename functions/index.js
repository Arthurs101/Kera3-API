const functions = require("firebase-functions");
const bodegaRouters = require('./routers/bodegaRouters');
var express = require("express");
var app = express();
app.use('/bodega', bodegaRouters)
exports.app = functions.https.onRequest(app)
// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
