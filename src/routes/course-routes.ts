const router = require('express').Router();
const courseController = require('../controllers/course-controller');

// GET /api/courses
router.get('/', courseController.index);
router.post('/', courseController.store);
router.delete('/:id', courseController.destroy);

module.exports = router;
