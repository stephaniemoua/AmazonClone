const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HSWMKECETcdKpEJ0SARQwB2Bu3pK9Jx5aKv1mhlPwcBsIljkB2SHmu0nW1c78EuwXGibhoXuR5iVZSGLPODTa9Y00AI1iSVNW"
);

// API setup:

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routees
app.get("/", (request, response) => response.status(200).send("hello world"));

// example of adding /steph to the api link
//app.get("/steph", (request, response) => response.status(200).send("HIIII"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Received BOOM!!", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  //201 - OK, created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

// example endpoint:
// http://localhost:5001/clone-b18f5/us-central1/api
