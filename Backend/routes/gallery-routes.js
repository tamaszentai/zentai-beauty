const express = require('express');

const galleryControllers = require('../controllers/gallery-controllers');

const router = express.Router();


router.get('/', galleryControllers.getGallery);
router.post('/', galleryControllers.createGalleryItem);


module.exports = router;