// ? Upload routes for uploading and managing games

// * Requirements
const express = require("express");
const Game = require("../models/gameModel");

// * Shortcut
const router = express.Router();

// * Upload Game Route
router.post("/", async (req, res) => {
    try {
        const { title, category, gameFileLink, description } = req.body;
        const newGame = new Game({
            title,
            category,
            gameFileLink,
            description
        });
        await newGame.save();
        res.status(201).json({ message: "Upload Successful! Your game will be reviewed." });
    } catch (error) {
        res.status(400).json({ error: "Game could not be uploaded. Please check your information." });
    }
});

// * Export the game routes for use in other files
module.exports = router;