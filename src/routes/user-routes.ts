const router = require('express').Router();

const userController = require('../controllers/user-controller');

// GET /api/users
router.get('/', userController.index);

module.exports = router;
