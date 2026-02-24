const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
const public = path.join(__dirname, "public")

app.use("/", express.static(path.join(public, "indexPage")));
app.use("/games", express.static(path.join(public, "gamesPage")));
app.use("/games/DTL", express.static(path.join(public, "gamesPage", "gameSource", "DTL")));
app.use("/sign-up", express.static(path.join(public, "signUpPage")));
app.use("/upload", express.static(path.join(public, "uploadPage")));

app.listen(port, () => {
    console.log(`Server is working on: http://localhost:${port}`);
});