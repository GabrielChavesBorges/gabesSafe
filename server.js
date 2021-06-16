// Package setup: --------------------------------------------------------------

// node -r dotenv/config server.js dotenv_config_path=/C:/Users/gabri/OneDrive/Documents/Development/gabesSafe/.env
import Bcrypt from "bcrypt";
import Express from "express";
import Mongoose from "mongoose";
import Cors from "cors";
import User from "./models/User.js";

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

  if(req.body.email !== "") {

    // Look for user in db:
    User.findOne({ email: req.body.email }, (readError, foundUser) => {
      if(!readError) {
        if(!foundUser) {
          // If no such user found, create new user.
          Bcrypt.genSalt(saltRounds, (saltError, salt) => {
            if(!saltError) {
              Bcrypt.hash(req.body.password, salt, (hashError, hash) => {
                if(!hashError) {
                  const newUser = new User ({
                    email: req.body.email,
                    password: hash
                  });
                  newUser.save(saveError => {
                    if(!saveError) {
                      res.send("User created: " + req.body.email);
                    } else {
                      console.log(saveError);
                      res.send(saveError);
                    }
                  });
                } else {
                  console.log(hashError);
                }
              });
            } else {
              console.log(saltError);
            }
          });
        } else {
          res.send("User already exists.");
        }
      } else {
      console.log(readError);
      }
    });

  } else {
    res.send("Empty fields.");
  }
})

// Connect server:
app.listen(5000, () => {
  console.log("Server up.");
});
