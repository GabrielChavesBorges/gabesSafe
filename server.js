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
const initialEntries = [
  {
      title: "Facebook",
      login: "user@gmail.com",
      password: "test1",
      link: "facebook.com"
  },
  {
      title: "Google",
      login: "user@gmail.com",
      password: "test1",
      link: "google.com"
  },
  {
      title: "LinkedIn",
      login: "user@gmail.com",
      password: "test1",
      link: "linkedin.com"
  }
];

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

app.post("/register", (req, res) => {
  // If there are empty fields.
  if(req.body.email === "" || req.body.password === "") {
    res.send("Empty fields.");
  } else {
    User.findOne({ email: req.body.email }, (dbError, foundUser) => {
      // If find opperation fails.
      if(dbError) {
        console.log(dbError);
        res.send(dbError);
      } else if(foundUser) {
        // If user already exists.
        res.send("User already exists.");
      } else {
        // Salt password encryption.
        Bcrypt.genSalt(saltRounds, (saltError, salt) => {
          if(saltError) {
            // If salt opperation fails.
            console.log(saltError);
            res.send(dbError);
          } else {
            // Encrypt password.
            Bcrypt.hash(req.body.password, salt, (hashError, hash) => {
              if(hashError) {
                // If encryption fails.
                console.log(hashError);
                res.send(hashError);
              } else {
                // Create model.
                const newUser = new User ({
                  email: req.body.email,
                  password: hash,
                  entries: initialEntries
                });
                // Insert in database.
                newUser.save(saveError => {
                  if(saveError) {
                    // If insertion fails.
                    console.log(saveError);
                    res.send(saveError);
                  } else {
                    // On success.
                    res.send("User created.");
                  } 
                });
              } 
            });
          } 
        });
      } 
    });
  }  
});

app.post("/login", (req, res) => {
  // If fields come blank
  if(req.body.email === "") {
    res.send("Empty fields.");
  } else {
    User.findOne({ email: req.body.email }, (dbError, foundUser) => {
      // If user doesn't exist.
      if(!foundUser) {
        res.send("User not found.");
      } else {
        // If password is invalid.
        Bcrypt.compare(req.body.password, foundUser.password, (err, result) => {
          if(!result) {
            res.send("Invalid password.");
          } else { // If login successful.
            res.send("Login successful.");
          }
        });
      }
    });
  }
});

app.post("/populateDeck", (req, res) => {
  // Get user, find it it DB and return all of its entries.
  User.findOne({email: req.body.login}, (err, foundUser) => {
    if(err) {
      console.log(err);
    } else if (!foundUser){
      console.log("User not found when populating deck.");
    } else {
      res.send(foundUser.entries);
    }
  });
});

app.post("/insertEntry", (req, res) => {
  User.findOne({email: req.body.login}, (err, foundUser) => {
    if(err) {
      console.log(err);
    } else if(!foundUser) {
      console.log("User not found when trying to add entry.");
    } else {
      foundUser.entries.push(req.body.entry);
      foundUser.save();
      res.send(foundUser.entries);
    }
  });
});

// Connect server:
app.listen(5000, () => {
  console.log("Server up.");
});
