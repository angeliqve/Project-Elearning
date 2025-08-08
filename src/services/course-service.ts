const courseRepository = require('../repositories/course-repository');

exports.getAllCourses = async () => {
  return await courseRepository.getAll();
};

exports.getCourseBySlug = async (slug: string) => {
  return await courseRepository.findBySlug(slug);
};

exports.addCourse = async (data: any) => {
  return await courseRepository.create(data);
};

exports.updateCourse = async (slug: string, data: any) => {
  const course = await courseRepository.findBySlug(slug);
  if (!course) return null;

  return await courseRepository.update(slug, data);
};

exports.deleteCourse = async (slug: string) => {
  const course = await courseRepository.findBySlug(slug);
  if (!course) return null;

  await courseRepository.remove(slug);
  return course;
};

exports.deleteCourseByTitle = async (title: string) => {
  const course = await courseRepository.findByTitle(title);
  if (!course) return null;

  await courseRepository.removeByTitle(title);
  return course;
};

