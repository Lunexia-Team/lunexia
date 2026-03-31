// ? Authentication routes for user sign in

// * Requirements
const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/userModel");

// * Shortcut
const router = express.Router();

// * Sign In Route
router.post("/", async (req, res) => {
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

// * Export the sign in routes for use in other files
module.exports = router;