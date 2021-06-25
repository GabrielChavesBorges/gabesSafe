import Mongoose from "mongoose";

export function databaseSetup() {
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
}