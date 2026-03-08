require('dotenv').config({ quiet: true });
const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");
const authRoutes = require("./routes/auth");

const port = 3000;

const app = express();

connectDB();
app.use(express.json());
app.use(cors());
app.use("/api", authRoutes);

const distPath = path.join(__dirname, "source-code", "app", "dist");
const gamesPath = path.join(__dirname, "source-code", "app", "public", "gameSource");

app.use(express.static(distPath));
app.use("/games/DTL", express.static(path.join(gamesPath, "DTL")));
app.use("/games/AT", express.static(path.join(gamesPath, "AT")));

app.use((req, res, next) => {
    if (req.method === 'GET' && !req.path.startsWith('/api')) {
        res.sendFile(path.join(distPath, "index.html"));
    } else {
        next();
    }
});

app.listen(port, () => console.log(`🚀 Server: http://localhost:${port}`));