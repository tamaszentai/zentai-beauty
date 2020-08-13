const express = require('express');
const auth = require('../middleware/auth');

const bioControllers = require('../controllers/bio-controllers');

const router = express.Router();

router.post('/create', auth, bioControllers.createBio);
router.get('/', bioControllers.getBio);
router.patch('/:id', auth, bioControllers.updateBio)

module.exports = router;