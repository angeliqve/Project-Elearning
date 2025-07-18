const router = require('express').Router();
const courseController = require('../controllers/course-controller');

// GET /api/courses
router.get('/', courseController.index);

module.exports = router;
