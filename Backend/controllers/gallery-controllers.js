const GalleryItemModel = require('../models/gallery-item');

const getGallery = async (req, res, next) => {
  const galleryItem = await GalleryItemModel.find({});
  try {
    res.send(galleryItem);
  } catch (err) {
    res.status(500).send(err);
  }
};

const createGalleryItem = async (req, res, next) => {
  const galleryItem = new GalleryItemModel(req.body);
  try {
    await galleryItem.save();
    res.send(galleryItem);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.getGallery = getGallery;
exports.createGalleryItem = createGalleryItem;