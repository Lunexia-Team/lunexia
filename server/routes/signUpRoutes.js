// ? Authentication routes for user sign up

// * Requirements
const express = require("express");
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");

// * Shortcut
const router = express.Router();

// * Sign Up Route
router.post("/", async (req, res) => {
    try {
        const { password, ...userData } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ ...userData, password: hashedPassword });
        await newUser.save();
        res.status(201).json({ message: "User created successfully!" });
    } catch (error) {
        res.status(400).json({ error: "The email address or username has already been taken." });
    }
});

// * Export the sign up routes for use in other files
module.exports = router;