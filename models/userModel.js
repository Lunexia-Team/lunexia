// ? User model definition file

// * User model definition using Mongoose
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    birthDate: { type: Date, required: true },
    createdAt: { type: Date, default: Date.now }
});

// * Export the User model for use in other files
module.exports = mongoose.model("User", userSchema);