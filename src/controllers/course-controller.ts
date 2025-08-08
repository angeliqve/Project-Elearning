import { Request, Response } from 'express';
// import { AuthenticatedRequest } from '../types/authenticated-request-type';

const courseService = require('../services/course-service');

// mendapatkan list kursus
exports.getAllCourses = async (req: Request, res: Response) => {
  try {
    const courses = await courseService.getAllCourses();

    return res.status(200).json({
      statusCode: 200,
      message: 'Berhasil mendapatkan data kursus!',
      data: courses,
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      statusCode: 500,
      message: 'Error internal server!',
    });
  }
}

// mendapatkan kursus berdasarkan slug
exports.getCourseBySlug = async (req: Request, res: Response) => {
  const { slug } = req.params;

  try {
    const course = await courseService.getCourseBySlug(slug);

    if (!course) {
      return res.status(404).json({
        statusCode: 404,
        message: 'Kursus tidak ditemukan',
      });
    }

    return res.status(200).json({
      statusCode: 200,
      message: 'Berhasil mendapatkan data kursus!',
      data: course,
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      statusCode: 500,
      message: 'Error internal server!',
    });
  }
}

// menambahkan kursus baru
exports.createCourse = async (req: Request, res: Response) => {
  const data = req.body;

  try {
    const newCourse = await courseService.addCourse(data);

    return res.status(201).json({
      statusCode: 201,
      message: 'Berhasil menambahkan kursus baru!',
      data: newCourse,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      statusCode: 500,
      message: 'Error internal server!',
    });
  }
};

// mengubah kursus
exports.updateCourse = async (req: Request, res: Response) => {
  const { slug } = req.params;
  const data = req.body;
  
  try {
    const existingCourse = await courseService.getCourseBySlug(slug);
    if (!existingCourse) {
      return res.status(404).json({
        statusCode: 404,
        message: 'Kursus tidak ditemukan',
      });
    }

    const updatedCourse = await courseService.updateCourse(slug, data);

    return res.status(201).json({
      statusCode: 201,
      message: 'Berhasil mengubah data kursus!',
      data: updatedCourse,
    });
    
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      statusCode: 500,
      message: 'Error internal server!',
    });
  }
};

// menghapus kursus
exports.deleteCourse = async (req: Request, res: Response) => {
  const { slug } = req.params;

  try {
    const existingCourse = await courseService.getCourseBySlug(slug);
    if (!existingCourse) {
      return res.status(404).json({
        statusCode: 404,
        message: 'Kursus tidak ditemukan',
      });
    }

    const deletedCourse = await courseService.deleteCourse(slug);

    return res.status(201).json({
      statusCode: 201,
      message: 'Berhasil menghapus data kursus!',
      data: deletedCourse,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      statusCode: 500,
      message: 'Error internal server!',
    });
  }
};

exports.deleteCourseByTitle = async (req: Request, res: Response) => {
  const title = req.params.title;
  const result = await courseService.deleteCourseByTitle(title);

  if (result) {
    res.status(200).json({ message: `Course dengan title "${title}" berhasil dihapus.` });
  } else {
    res.status(404).json({ message: `Course dengan title "${title}" tidak ditemukan.` });
  }
};



// // mendapatkan list kursus yang diikuti pengguna
// exports.enrolledCourses = async (req: AuthenticatedRequest, res: Response) => {
//   try {
//     const enrolledCourses = courseService.getEnrolledCourse();

//     if (!enrolledCourses || enrolledCourses.length === 0) {
//       return res.status(404).json({
//         statusCode: 404,
//         message: 'Data kursus yang diikuti kosong!',
//       });
//     }

//     return res.status(200).json({
//       statusCode: 200,
//       message: 'Sukses mendapatkan kursus yang diikuti!',
//       data: enrolledCourses,
//     });
//   } catch (error: any) {
//     console.error(error);
//     return res.status(500).json({
//       statusCode: 500,
//       message: 'Error internal server!',
//     });
//   }
// };
