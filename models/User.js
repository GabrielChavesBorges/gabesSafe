import Mongoose from "mongoose";
import EntrySchema from "./Entry.js";

const emailMissingMessage = "Error: Email is a compulsory field for user " +
"creation";
const passwordMissingMessage = "Error: Password is a compulsory field for " +
"user creation";
const emailValidation = /(.+)@(.+){2,}\.(.+){2,}/;

const userSchema = new Mongoose.Schema({
    email: {
        type: String,
        validate: {
            validator: (value) => (emailValidation.test(value)),
            message: "Invalid email."
        },
        required: [true, emailMissingMessage],
        unique: true
    },
    password: {
        type: String,
        required: [true, passwordMissingMessage]
    },
    entries: [EntrySchema]
});

const User = new Mongoose.model("User", userSchema);

export default User;