import Mongoose from "mongoose";

const entrySchema = new Mongoose.Schema({
    description: String,
    login: String,
    password: String,
    link: String
});

const Entry = new Mongoose.model("Entry", entrySchema);

export default Entry;