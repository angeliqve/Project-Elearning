const router = require('express').Router();

// Handle semua route /users ke router user
router.use('/users', require('./user-routes'));

module.exports = router;
