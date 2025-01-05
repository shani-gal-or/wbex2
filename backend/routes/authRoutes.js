const express = require('express');
const { signUp, signIn } = require('../controllers/authController');

const router = express.Router();

// Define routes
router.post('/signup', signUp); // Sign-Up Route
router.post('/signin', signIn); // Sign-In Route

module.exports = router;
