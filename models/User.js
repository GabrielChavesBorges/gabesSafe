import Mongoose from "mongoose";

const emailMissingMessage = "Error: Email is a compulsory field for user " +
"creation";
const passwordMissingMessage = "Error: Password is a compulsory field for " +
"user creation";

const userSchema = new Mongoose.Schema({
    email: {
        type: String,
        required: [true, emailMissingMessage]
    },
    password: {
        type: String,
        required: [true, passwordMissingMessage]
    }
});

const User = new Mongoose.model("User", userSchema);

export default User;