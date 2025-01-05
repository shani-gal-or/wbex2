const express = require('express');
const { getMyCourses } = require('../controllers/studentsController');
const authenticateToken = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/my-courses', authenticateToken, getMyCourses);

module.exports = router;

