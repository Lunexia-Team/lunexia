// ? Main server file for the project

// * requirements
require('dotenv').config({ quiet: true });
const express = require("express");
const cors = require("cors");
const path = require("path");

// * shortcut
const app = express();

// * database connection
const connectDB = require("./config/db.js");
connectDB();

// * middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// * routes for sign up, sign in and game upload 
const signInRoutes = require("./routes/signInRoutes.js");
const signUpRoutes = require("./routes/signUpRoutes.js");
const uploadRoutes = require('./routes/uploadRoutes.js');

app.use("/api/signin", signInRoutes);
app.use("/api/signup", signUpRoutes);
app.use('/api/upload', uploadRoutes);

// * static files for Vue app and game source files
const distPath = path.join(__dirname, "source-code", "app", "dist");
const gamesPath = path.join(__dirname, "source-code", "app", "public", "gameSource");

app.use(express.static(distPath));
app.use("/games/DTL", express.static(path.join(gamesPath, "DTL")));
app.use("/games/AT", express.static(path.join(gamesPath, "AT")));

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