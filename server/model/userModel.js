import { genSaltSync, hashSync } from "bcrypt";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Email is Required"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Password is Required"]
    },
    firstName: {
        type: String,
        required: false
    },
    lastName: {
        type: String,
        required: false
    },
    image: {
        type: String,
        required: false
    },
    color: {
        type: String,
        required: false
    },
    profileSetup: {
        type: String,
        required: false
    }
})

userSchema.pre("save", async function (next) {
    const salt = genSaltSync();
    const hash = hashSync(this.password, salt);
    this.password = hash;
    next();
})


const User = mongoose.model("User", userSchema);

export default User;