const express = require('express');

const galleryControllers = require('../controllers/gallery-controllers');
const uploader = require('../middleware/file-upload');

const router = express.Router();


router.get('/', galleryControllers.getGallery);
router.post('/', uploader.single('image'), galleryControllers.createGalleryItem);


module.exports = router;