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

exports.store = async(req: Request, res: Response) =>{
  try {
    const course = req.body;
  
    const addCourse = courseService.addCourse(course);
  
    if(!addCourse){
      return res.status(400).json({message: 'Gagal menambahkan course'});
    }

    return res.status(200).json({
      message: ' Berhasil tambah course',
      data: addCourse
    });
  } catch (error:any){
    return res.status(500).json({ message: 'Internal server error' });
  }
};

exports.destroy = async(req: Request, res: Response) =>{
  try {
    const courseId = req.params.id;

    const deleted = courseService.deleteCourse(courseId);
  
    if(!deleted){
      return res.status(400).json({message: 'Course tidak ditemukan'});
    }

    return res.status(200).json({
      message: 'Berhasil hapus course'
    });
  } catch (error:any){
    return res.status(500).json({ message: 'Internal server error' });
  }
};