// ? Authentication routes for user sign up and sign in

// * Requirements
const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/userModel");

// * Shortcut
const router = express.Router();

// * Sign Up Route
router.post("/signup", async (req, res) => {
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

// * Sign In Route
router.post("/signin", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(400).json({ error: "Invalid information." });
        }
        res.status(200).json({ message: "Successful", user: { username: user.username, email: user.email } });
    } catch (error) {
        res.status(500).json({ error: "Server error." });
    }
});

// * Export the auth routes for use in other files
module.exports = router;