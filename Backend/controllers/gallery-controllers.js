const GalleryItemModel = require('../models/gallery-item');
const multer = require('multer');
const fs = require('fs');
const { Storage } = require('@google-cloud/storage');
require('dotenv').config();


const storage = new Storage({
  projectId: process.env.GCLOUD_PROJECT_ID,
  keyFilename: process.env.GCLOUD_APPLICATION_CREDENTIALS,
});


const bucket = storage.bucket(process.env.GCLOUD_STORAGE_BUCKET_URL);

const getGallery = async (req, res, next) => {
  const galleryItem = await GalleryItemModel.find({});
  try {
    res.send(galleryItem);
  } catch (err) {
    res.status(500).send(err);
  }
};

const createGalleryItem = async (req, res, next) => {
  try {
    if (!req.file) {
      res.status(400).send('Error, could not upload file');
      return;
    }

    // Create new blob in the bucket referencing the file
    const blob = bucket.file(req.file.originalname);

    // Create writable stream and specifying file mimetype
    const blobWriter = blob.createWriteStream({
      metadata: {
        contentType: req.file.mimetype,
      },
    });

    blobWriter.on('error', (err) => next(err));

    blobWriter.on('finish', () => {
      // Assembling public URL for accessing the file via HTTP
      const publicUrl = `https://firebasestorage.googleapis.com/v0/b/${
        bucket.name
      }/o/${encodeURI(blob.name)}?alt=media`;

      // Return the file name and its public URL
      res
        .status(200)
        .send({ fileName: req.file.originalname, fileLocation: publicUrl });
    });

    // When there is no more data to be consumed from the stream
    blobWriter.end(req.file.buffer);
  } catch (error) {
    res.status(400).send(`Error, could not upload file: ${error}`);
    return;
  }
};

// const createGalleryItem = async (req, res, next) => {
//   const galleryItem = new GalleryItemModel(req.body);
//   try {
//     await galleryItem.save();
//     res.send(galleryItem);
//   } catch (err) {
//     res.status(500).send(err);
//   }
// };

exports.getGallery = getGallery;
exports.createGalleryItem = createGalleryItem;