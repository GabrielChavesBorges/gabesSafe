// Package setup: --------------------------------------------------------------

import DotEnv from "dotenv"; 
DotEnv.config(); // This must run before anything else.

import Bcrypt from "bcrypt";
import Express from "express";
import Mongoose from "mongoose";

const app = Express();
const saltRounds = 12; 
// Password safety level, the highest the more secure but more slow to login.

app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));

// Database setup: -------------------------------------------------------------

const databaseProtocol  = "mongodb+srv://"
const databaseUser      = process.env.DB_USER + ":";
const databasePassword  = process.env.DB_PASSWORD;
const databaseName      = process.env.DB_NAME;
const databaseLocation  = process.env.DB_LOCATION;

Mongoose.connect(
  databaseProtocol  +
  databaseUser      +
  databasePassword  +
  databaseLocation  +
  databaseName
);

// Express routes: -------------------------------------------------------------

app.get("/", (req, res) => {
  // implement
})

// Connect server:
app.listen(3000, () => {
  console.log("Server up.");
});
  
