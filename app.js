// Package setup: --------------------------------------------------------------

import DotEnv from "dotenv"; 
DotEnv.config(); // This must run before anything else.

import Bcrypt from "bcrypt";
import Express from "express";
import Mongoose from "mongoose";

const app = Express();
const saltRounds = 12; /* Password safety level, the highest the more secure but
  more slow to login. */

app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));

// Database setup: -------------------------------------------------------------

// Database parameters:
const databaseProtocol  = "mongodb+srv://"
const databaseUser      = process.env.DB_USER + ":";
const databasePassword  = process.env.DB_PASSWORD;
const databaseName      = process.env.DB_NAME;
const databaseLocation  = process.env.DB_LOCATION;

// Start connection:
Mongoose.connect(
  databaseProtocol  +
  databaseUser      +
  databasePassword  +
  databaseLocation  +
  databaseName
);

// Schemas:
const userSchema = new Mongoose.Schema({
  email: {
    type: String,
    required: [true, "Error: cannot save user without email."]
  },
  password: {
    type: String,
    required: [true, "Error: cannot save user without password."]
  }
});

const keySchema = new Mongoose.Schema({
  title: String,
  link: String,
  password: String
});
  
