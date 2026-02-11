const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  brand: String,
  category: String,
  season: String,
  price: Number,
  image: String,
  source: String,
  externalUrl: String
});

module.exports = mongoose.model("Product", productSchema);
