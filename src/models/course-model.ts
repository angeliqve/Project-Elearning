import mongoose, { Schema, Document } from 'mongoose';

export interface CourseData extends Document {
  title: string;
  slug: string;
  description: string;
}

const CourseSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    slug: { type: String },
    description: { type: String },
  },
  { timestamps: true },
);

export const Course = mongoose.model<CourseData>('Course', CourseSchema);
