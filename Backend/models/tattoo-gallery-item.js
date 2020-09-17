const mongoose = require('mongoose');

const TattooGalleryItemSchema = new mongoose.Schema({
  caption: {
    type: String,
    required: true
  },
  src: {
    type: String,
    required: true
  },
  thumbnail: {
    type: String,
    required: true
  }
});

const TattooGalleryItem = mongoose.model("TattooGalleryItem", TattooGalleryItemSchema);
module.exports = TattooGalleryItem;