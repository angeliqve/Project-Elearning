const courseData = require('../data/courses');

exports.getCourses = () => {
  return courseData || [];
};

exports.addCourse = (course: any) => {
  if (!course) return null;

  const newCourse = {
    id: courseData.length + 1,
    title: course.title,
  };

  courseData.push(newCourse);
  return newCourse;
};

exports.deleteCourse = (id: number) => {
  for (let i = 0; i < courseData.length; i++) {
    if (courseData[i].id === id) {
      courseData.splice(i, 1); 
    }
  }
  return false;
};