//DEPENDENCIES
const express = require("express");
const cors = require("cors");

//CONFIGURATION
const app = express();

//CONTROLLER
const gamesController = require("./controllers/gamesController");

//MIDDLEWARE
app.use(express.json());
app.use(cors());
app.use("/games", gamesController)

//ROUTES
app.get("/", (req, res) => {
    res.send("Welcome to the GameTracker API!")
});

app.get("*", (req, res) => {
    res.status(404).json({error: "page not found"})
});

module.exports = app;