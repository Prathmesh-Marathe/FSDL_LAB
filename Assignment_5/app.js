const express = require('express');
const app = express();
const connectDB = require('./db.js');
const Product = require('./models/products.js');
const path = require('path');
const ejsMate = require('ejs-mate');
app.engine("ejs", ejsMate);

app.use(express.static(path.join(__dirname, "/public")));

connectDB();

const port = process.env.PORT || 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", async (req, res) => {
    try {
        res.redirect("/products")
    } catch (err) {
        console.log(err);
    }
});

// Index route (show all products)
app.get("/products", async (req, res) => {
    try {
        const allProducts = await Product.find({});
        res.render("index", { allProducts });
    } catch (err) {
        console.log(err);
        res.status(500).send("Server Error");
    }
});

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});