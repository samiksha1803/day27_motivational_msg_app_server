const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");

const app = express();
app.use(cors());
app.use(express.json());

const url = "mongodb+srv://samikshadesai37:5s8XvDzblDPAroF7@cluster0.xqt24fv.mongodb.net/messages?retryWrites=true&w=majority&tls=true";

const client = new MongoClient(url);

// Connect once when server starts
client.connect()
  .then(() => {
    console.log("Connected to MongoDB");

    app.get("/", (req, res) => {
      const db = client.db("messages");
      const coll = db.collection("messages");
      coll.find().toArray()
        .then(response => {
          const r = Math.floor(Math.random() * response.length);
          res.status(200).send(response[r]);
        })
        .catch(error => {
          console.error(error);
          res.status(500).send({ error: "Server error" });
        });
    });

   
