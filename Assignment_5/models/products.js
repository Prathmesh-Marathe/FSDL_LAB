const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    uniq_id: { type: String, required: true, unique: true },
    crawl_timestamp: String,
    product_url: { type: String, required: true },
    product_name: { type: String, required: true },
    product_category_tree: [String],
    pid: String,
    retail_price: Number,
    discounted_price: Number,
    image: [String],
    is_FK_Advantage_product: { type: Boolean, default: false },
    description: String,
    product_rating: String,
    overall_rating: String,
    brand: String,
    product_specifications: mongoose.Schema.Types.Mixed
}, { timestamps: true });

// 👇 IMPORTANT FIX HERE
module.exports = mongoose.model("Product", productSchema, "Products");
