import Mongoose from "mongoose";

const userSchema = new Mongoose.Schema({
    email: {
      type: String,
      required: [true, "Error: cannot save user without email."]
    },
    password: {
      type: String,
      required: [true, "Error: cannot save user without password."]
    }
  });
  const User = new Mongoose.model("User", userSchema);

export default User;