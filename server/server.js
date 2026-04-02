// ? Main server file for the project

// * Requirements
const express = require("express");
const cors = require("cors");
const path = require("path");
require('dotenv').config({ quiet: true ,path: path.join(__dirname, '../.env') });

// * Shortcut
const app = express();

// * Database connection
const connectDB = require("./config/db.js");
connectDB();

// * Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// * Routes
const signUpRoutes = require("./routes/signUpRoutes.js");
const signInRoutes = require("./routes/signInRoutes.js");
const uploadRoutes = require('./routes/uploadRoutes.js');
const userRoutes = require('./routes/userRoutes.js');

app.use("/api/signup", signUpRoutes);
app.use("/api/signin", signInRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/users", userRoutes);

// * Serve static files from the Vue app's dist directory
const distPath = path.join(__dirname, "..", "client", "dist");
app.use(express.static(distPath));

// * Serve index.html for all non-API GET requests to support client-side routing in Vue
app.use((req, res, next) => {
    if (req.method === 'GET' && !req.path.startsWith('/api')) {
        res.sendFile(path.join(distPath, "index.html"));
    } else {
        next();
    }
});

// * Start the server
const port = process.env.PORT || 3000;
const localHostServer = `http://localhost:${port}`;

app.listen(port, () => console.log(`🚀 Server: ${localHostServer}`));