const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51MuYGQSIhYvGKKmv9y7pgywwMxjGq69rV84NTJmqoyfxIikZFv6kUYa47IurPQsaQaW0s7GuPiq9avcu8YZO2LUJ00tO2jV3px');

// API

// -APP config
const app = express();

// -Middlewares
app.use(cors({origin:true}));
app.use(express.json());

// -API Routes
app.get('/',(request,response) => response.status(200).send('hello world'));

app.post('/payment/create',async (request,response)=>{
    const total =request.query.total;
    console.log('Payment request Recieved',total)
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd"
    })
    response.status(201).send({
        clientSecret:paymentIntent.client_secret,
    })
})  
// -Listen Command
exports.api = functions.https.onRequest(app)


// http://127.0.0.1:5001/codes882/us-central1/api