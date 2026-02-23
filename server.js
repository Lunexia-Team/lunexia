const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
const source = path.join(__dirname, "source-code")

app.use("/", express.static(path.join(source, "indexPage")));
app.use("/games", express.static(path.join(source, "gamesPage")));
app.use("/games/DTL", express.static(path.join(source, "WebGLBuild")));
app.use("/sign-up", express.static(path.join(source, "signUpPage")));
app.use("/upload", express.static(path.join(source, "uploadPage")));

app.listen(port, () => {
    console.log(`Server is working on: http://localhost:${port}`);
});