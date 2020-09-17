const express = require('express');
const tattooGalleryControllers = require('../controllers/tattoogallery-controller');
const tattooFileUpload = require('../middleware/tattooFile-upload');

const router = express.Router();


router.get('/', tattooGalleryControllers.getTattooGallery);
router.post('/', tattooFileUpload.single('file'), tattooGalleryControllers.createTattooGalleryItem);
router.delete('/:id', tattooGalleryControllers.deleteTattooGalleryItem);




module.exports = router;