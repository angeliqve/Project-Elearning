import {Request, Response} from "express";
const router = require('express').Router();

// Handle semua route /users ke router user
router.use('/users', require('./user-routes'));

router.use('/courses', require('./course-routes'));

router.use('/', (req: Request, res: Response) => {
    res.status(200).json({pesan: 'Ini dari API'});
});

module.exports = router;
