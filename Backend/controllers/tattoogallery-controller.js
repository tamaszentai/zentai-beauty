const TattooGalleryItemModel = require("../models/tattoo-gallery-item");
const multer = require("multer");
const fs = require("fs");
const { send } = require("process");

const getTattooGallery = async (req, res, next) => {
  const tattooGalleryItem = await TattooGalleryItemModel.find({});
  try {
    res.send(tattooGalleryItem);
  } catch (err) {
    res.status(500).send(err);
  }
};

const createTattooGalleryItem = async (req, res, next) => {
  const caption = req.body.caption;
  const tattooGalleryItem = await TattooGalleryItemModel({
    caption,
    src: `http://localhost:5000/${req.file.path}`,
    thumbnail: `http://localhost:5000/${req.file.path}`
  })
  try {
  tattooGalleryItem.save();
  res.json(tattooGalleryItem);
  } catch (err) {
    res.status(500).send(err);
  }

};

const deleteTattooGalleryItem = async (req, res, next) => {
  const tattooGalleryItem = await TattooGalleryItemModel.findByIdAndDelete(req.params.id);
  try {
    res.send(tattooGalleryItem);
    console.log(tattooGalleryItem.src);
    fs.unlinkSync(tattooGalleryItem.src);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.getTattooGallery = getTattooGallery;
exports.createTattooGalleryItem = createTattooGalleryItem;
exports.deleteTattooGalleryItem = deleteTattooGalleryItem;
