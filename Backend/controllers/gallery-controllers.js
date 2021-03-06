const GalleryItemModel = require("../models/gallery-item");
const multer = require("multer");
const fs = require("fs");
const { send } = require("process");

const getGallery = async (req, res, next) => {
  const galleryItem = await GalleryItemModel.find({});
  try {
    res.send(galleryItem);
  } catch (err) {
    res.status(500).send(err);
  }
};

const createGalleryItem = async (req, res, next) => {
  const caption = req.body.caption;
  const galleryItem = await GalleryItemModel({
    caption,
    src: `http://localhost:5000/${req.file.path}`,
    thumbnail: `http://localhost:5000/${req.file.path}`
  })
  try {
  galleryItem.save();
  res.json(galleryItem);
  } catch (err) {
    res.status(500).send(err);
  }

};

const deleteGalleryItem = async (req, res, next) => {
  const galleryItem = await GalleryItemModel.findByIdAndDelete(req.params.id);
  try {
    res.send(galleryItem);
    console.log(galleryItem.src);
    fs.unlinkSync(galleryItem.src);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.getGallery = getGallery;
exports.createGalleryItem = createGalleryItem;
exports.deleteGalleryItem = deleteGalleryItem;
