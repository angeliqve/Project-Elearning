import { Request, Response } from 'express';
const courseService = require('../services/course-service');

exports.index = (req: Request, res: Response) => {
  const courses = courseService.getCourses();

  if (!courses || courses.length === 0) {
    return res.status(404).json({ message: 'Data course tidak ditemukan' });
  }

  return res.status(200).json({
    message: 'Berhasil ambil data course',
    data: courses,
  });
};
