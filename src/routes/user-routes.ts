const router = require('express').Router();

const userController = require('../controllers/user-controller');

router.get('/', userController.index);
router.post('/', userController.store);
router.delete('/:id', userController.destroy);

module.exports = router;
