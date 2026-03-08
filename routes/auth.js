const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../models/user");

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

module.exports = router;