const express = require('express');
const auth = require('../middleware/auth');

const authControllers = require('../controllers/auth-controllers');
const userControllers = require('../controllers/user-controllers');

const router = express.Router();


router.get('/auth/user', auth, authControllers.getuser);
router.post('/auth', authControllers.authUser);
router.post('/', userControllers.createUser);


module.exports = router;