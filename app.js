// Package setup: --------------------------------------------------------------

import DotEnv from "dotenv";
DotEnv.config();

import React from "react";
import Mongoose from "mongoose";

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
)