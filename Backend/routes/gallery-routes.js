const express = require('express');
const galleryControllers = require('../controllers/gallery-controllers');
const fileUpload = require('../middleware/file-upload');

const router = express.Router();


router.get('/', galleryControllers.getGallery);
router.post('/', fileUpload.single('file'), galleryControllers.createGalleryItem);
router.delete('/:id', galleryControllers.deleteGalleryItem);




module.exports = router;