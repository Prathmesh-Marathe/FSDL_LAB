const mongoose = require("mongoose");

const packageSchema = new mongoose.Schema({
    destination: String,
    price: Number,
    days: Number
});

module.exports = mongoose.model("Package", packageSchema);