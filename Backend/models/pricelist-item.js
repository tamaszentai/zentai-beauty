const mongoose = require('mongoose');

const PriceListItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
});

const PriceListItem = mongoose.model("PriceListItem", PriceListItemSchema);
module.exports = PriceListItem;