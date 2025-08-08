const router = require('express').Router();
const courseController = require('../controllers/course-controller');

// GET semua kursus
router.get('/', courseController.getAllCourses);

// GET kursus berdasarkan slug
router.get('/:slug', courseController.getCourseBySlug);

// POST buat kursus baru
router.post('/', courseController.createCourse);

// PATCH ubah kursus berdasarkan slug
router.patch('/:slug', courseController.updateCourse);

// DELETE hapus kursus berdasarkan slug
router.delete('/:slug', courseController.deleteCourse);

router.delete('/by-title/:title', courseController.deleteCourseByTitle);

module.exports = router;
