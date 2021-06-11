import Mongoose from "mongoose";

const keySchema = new Mongoose.Schema({
    title: String,
    link: String,
    password: String
  });
  const Key = new Mongoose.model("Key", keySchema);

export default Key;