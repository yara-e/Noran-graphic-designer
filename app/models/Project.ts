import mongoose, { Schema, models, model } from "mongoose";


const ProjectSchema = new Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  type: { type: String, required: true },
  imageUrl: { type: String, required: true },
  fileId: { type: String }, // Make optional so video-only links don't break this
  videoUrl: { type: String }, // New field for external links
  createdAt: { type: Date, default: Date.now },
});

export const Project = models.Project || model("Project", ProjectSchema);
