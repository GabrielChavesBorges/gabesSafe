// Package setup: --------------------------------------------------------------

// node -r dotenv/config server.js dotenv_config_path=/C:/Users/gabri/OneDrive/Documents/Development/gabesSafe/.env
import Bcrypt from "bcrypt";
import Express from "express";
import Mongoose from "mongoose";

const app = Express();
const saltRounds = 12; 
// Password safety level, the higher the more secure but slower to login.

app.use(Express.urlencoded({extended:true}));
app.use(Express.static("src/views"));

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
  databaseName,
  {
    useNewUrlParser: true, 
    useUnifiedTopology: true
  }
);

// Express routes: -------------------------------------------------------------

app.get("/", (req, res) => {
  res.render("index");
})

// Connect server:
app.listen(3000, () => {
  console.log("Server up.");
});
  
