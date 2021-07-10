import Bcrypt from 'bcrypt';
import Express from 'express';
import Cors from 'cors';
import User from './models/User.js';
import { databaseSetup } from './database.js';

// Global constants and variables: ---------------------------------------------

const isDev = false; // Development mode.
const app = Express();
const saltRounds = 12; // Password safety level.
const port = process.env.PORT || 5000;
const allowedUrl = isDev ? 
  'http://localhost:3000' : 'https://gabes-safe.herokuapp.com';
const corsOptions = {
  origin: (origin, callback) => {
    if (origin === allowedUrl) {
      callback(null, true);
    } else {
      callback(
        new Error('Origin of request ' + origin + ' not allowed by CORS')
      );
    }
  }
};

// Setup: ----------------------------------------------------------------------

app.use(Express.json());
app.use(Express.static('client/build'));
app.use(Cors(corsOptions));

databaseSetup();

// Express routes: -------------------------------------------------------------

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.post('/register', (req, res) => {
  // If there are empty fields.
  if (req.body.email === '' || req.body.password === '') {
    res.send('Empty fields.');
  } else {
    User.findOne({ email: req.body.email }, (dbError, foundUser) => {
      // If find opperation fails.
      if (dbError) {
        console.log(dbError);
        res.send(dbError);
      } else if (foundUser) {
        // If user already exists.
        res.send('User already exists.');
      } else {
        // Salt password encryption.
        Bcrypt.genSalt(saltRounds, (saltError, salt) => {
          if (saltError) {
            // If salt opperation fails.
            console.log(saltError);
            res.send(saltError);
          } else {
            // Encrypt password.
            Bcrypt.hash(req.body.password, salt, (hashError, hash) => {
              if (hashError) {
                // If encryption fails.
                console.log(hashError);
                res.send(hashError);
              } else {
                // Create model.
                const newUser = new User ({
                  email: req.body.email,
                  password: hash,
                });
                // Insert in database.
                newUser.save(saveError => {
                  if (saveError) {
                    // If insertion fails.
                    console.log(saveError);
                    res.send(saveError);
                  } else {
                    // On success.
                    res.send('User created.');
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

app.post('/login', (req, res) => {
  // If fields are blank.
  if (req.body.email === '') {
    res.send('Empty fields.');
  } else {
    User.findOne({ email: req.body.email }, (dbError, foundUser) => {
      // If user doesn't exist.
      if (!foundUser) {
        res.send('User not found.');
      } else {
        // If password is invalid.
        Bcrypt.compare(req.body.password, foundUser.password, (err, result) => {
          if (!result) {
            res.send('Invalid password.');
          } else { // If login successful.
            res.send('Login successful.');
          }
        });
      }
    });
  }
});

app.post('/populateDeck', (req, res) => {
  User.findOne({email: req.body.login}, (err, foundUser) => {
    if (err) {
      console.log(err);
    } else if (!foundUser){
      console.log('User not found when populating deck.');
    } else {
      res.send(foundUser.entries);
    }
  });
});

app.post('/insertEntry', (req, res) => {
  User.findOne({email: req.body.login}, (err, foundUser) => {
    if (err) {
      console.log(err);
    } else if (!foundUser) {
      console.log('User not found when trying to add entry.');
    } else {
      foundUser.entries.push(req.body.entry);
      foundUser.save();
      res.send(foundUser.entries);
    }
  });
});

app.delete('/entry', (req, res) => {
  User.findOne({email: req.body.login}, (err, foundUser) => {
    if (err) {
      console.log(err);
    } else if (!foundUser){
      console.log('User not found when deleting entry.');
    } else {
      const updatedUser = foundUser;
      updatedUser.entries = foundUser.entries.filter((entry) => {
        return entry._id.toString() !== req.body.entryId
      });
      updatedUser.save();
      res.send(updatedUser.entries);
    }
  });
});

app.put('/entry', (req, res) => {
  User.updateOne({ 
    'email': req.body.login, 
    'entries._id': req.body.updatedEntry._id 
    }, 
    {
    '$set': { 'entries.$': req.body.updatedEntry }
    },
    (err, operationResult) => {
    if (err) {
      console.log(err);
    } else {
      User.findOne({ 'email': req.body.login }, (err, foundUser) => {
        if (err) {
          console.log(err);
        } else if (!foundUser) {
          console.log('Unable to find user when updating entry.');
        } else {
          res.send(foundUser.entries);
        }
      });
    }
  });
});

// Connect server:
app.listen(port, () => {
  console.log('Server up');
});

// Preprocess .env call:
// node -r dotenv/config server.js dotenv_config_path=/C:/Users/gabri/OneDrive/Documents/Development/gabesSafe/.env
