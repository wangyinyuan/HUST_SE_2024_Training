const mongoose = require('mongoose');

const goodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  specifications: String,
  price: { type: Number, required: true }
});

const Good = mongoose.model('Good', goodSchema);
module.exports = Good;