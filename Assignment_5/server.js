const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");

const Package = require("./packageModel");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect("mongodb://127.0.0.1:27017/FSDL_Assignment5");

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "home.html"));
});

app.get("/add", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "add.html"));
});

app.post("/add", async (req, res) => {
    const newPackage = new Package({
        destination: req.body.destination,
        price: req.body.price,
        days: req.body.days
    });

    await newPackage.save();

    res.redirect("/packages");
});

app.get("/packages", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "list.html"));
});

app.get("/api/packages", async (req, res) => {
    try {
        const packages = await Package.find();
        res.json(packages);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch packages" });
    }
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});