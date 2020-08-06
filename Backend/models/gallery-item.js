const mongoose = require('mongoose');

const GalleryItemSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  }
});

const GalleryItem = mongoose.model("GalleryItem", GalleryItemSchema);
module.exports = GalleryItem;

