import Mongoose from "mongoose";

const entrySchema = new Mongoose.Schema({
    title: String,
    login: String,
    password: String,
    link: String
});

export default entrySchema;