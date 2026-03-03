const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

const gamesPath = path.join(__dirname, "source-code", "app", "public", "gameSource");
const distPath = path.join(__dirname, "source-code", "app", "dist");

app.use("/games/DTL", express.static(path.join(gamesPath, "DTL")));
app.use("/games/ES", express.static(path.join(gamesPath, "ES")));

app.use(express.static(distPath));

app.use((req, res) => { res.sendFile(path.join(distPath, "index.html")); });

app.listen(port, () => { console.log(`Server is working on: http://localhost:${port}`); });