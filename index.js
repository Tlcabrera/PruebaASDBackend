const express = require('express');
//const mongoose = require('mongoose');
const bodyparser = require('body-parser');
require('dotenv').config();
const userRoute=require ("./src/routes/User");
const pqrsRoute= require ("./src/routes/Pqrs");
const conexionBD = require('./src/config/mongo');
// settings
const app = express();
const port = process.env.PORT || 9000;

app.use(express.static('public'));

// middlewares
app.use(express.json());
app.use("/api", userRoute);
app.use("/pqrs", pqrsRoute);

// routes
/*app.get("/", (req, res) => {
  res.send("Welcome to my API");
});*/

// mongodb connection
conexionBD.conexionBD();
/*mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((error) => console.error(error));*/

// server listening
app.listen(port, () => console.log("Server listening to", port));