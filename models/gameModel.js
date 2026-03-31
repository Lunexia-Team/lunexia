// ? Game model definition file

// * Game model definition using Mongoose
const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
    title: { type: String, required: true },
    category: { type: String, required: true },
    gameFileLink: { type: String, required: true },
    description: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

// * Export the Game model for use in other files
module.exports = mongoose.model('Game', gameSchema);