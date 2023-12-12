import mongoose from "mongoose";
const { Schema } = mongoose;

const ProjectSchema = new Schema(
  {
    title: String,
    repoUrl: String,
    liveUrl: String,
    technologies: [],
    projectType: String,
    projectImage: String,
  },
  {
    timestamps: true,
  }
);
const Project = mongoose.model("Project", ProjectSchema);
export default Project;
