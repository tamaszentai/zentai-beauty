const express = require('express');

const bioControllers = require('../controllers/bio-controllers');

const router = express.Router();

router.post('/create', bioControllers.createBio);
router.get('/', bioControllers.getBio);
router.patch('/:id', bioControllers.updateBio)

module.exports = router;