// ? Database connection configuration file

// * MongoDB connection setup using Mongoose
const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("✅ MongoDB Connected");
    } catch (err) {
        console.error("MongoDB Error: ", err);
        process.exit(1);
    }
};

// * Export the connectDB function for use in server.js
module.exports = connectDB;