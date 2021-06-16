// Package setup: --------------------------------------------------------------

// node -r dotenv/config server.js dotenv_config_path=/C:/Users/gabri/OneDrive/Documents/Development/gabesSafe/.env
import Bcrypt from "bcrypt";
import Express from "express";
import Mongoose from "mongoose";
import Cors from "cors";

const app = Express();
const saltRounds = 12; 
// Password safety level, the higher the more secure but slower to login.

app.use(Express.json());
app.use(Express.static("src/views"));
app.use(Cors());

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
  res.send("Hello World!");
})

app.post("/", (req, res) => {
  console.log(req.body);
  res.send("ok");
})

// Connect server:
app.listen(5000, () => {
  console.log("Server up.");
});
  
