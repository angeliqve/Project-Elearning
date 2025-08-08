import { Course, CourseData } from '../models/course-model';

exports.getAll = async () => {
  return await Course.find();
};

exports.findBySlug = async (slug: string) => {
  return await Course.findOne({ slug });
};

exports.create = async (data: Partial<CourseData>) => {
  return await Course.create(data);
};

exports.update = async (slug: string, data: Partial<CourseData>) => {
  return await Course.findOneAndUpdate({ slug }, data, { new: true });
};

exports.remove = async (slug: string) => {
  return await Course.findOneAndDelete({ slug });
};

exports.findByTitle = async (title: string) => {
  return await Course.findOne({ title });
};

exports.removeByTitle = async (title: string) => {
  return await Course.deleteOne({ title });
};
