// ? User Routes for searching and retrieving user information

// * Requirements
const express = require("express");
const User = require("../models/userModel");

// * Shortcut
const router = express.Router();

// * Get User by Username Route
router.get("/:username", async (req, res) => {
    try {
        const user = await User.findOne({ username: req.params.username })
            .select("-password");
        if (!user) return res.status(404).json({ error: "User not found" });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});

module.exports = router;