const mongoose = require('mongoose');

const GalleryItemSchema = new mongoose.Schema({
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

const GalleryItem = mongoose.model("GalleryItem", GalleryItemSchema);
module.exports = GalleryItem;

