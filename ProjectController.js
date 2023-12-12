import Project from "./ProjectSchema.js";

export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createProject = async (req, res) => {
  try {
    const project = await Project.create(req.body);
    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateProject = async (req, res) => {
  const { title, repoUrl, liveUrl, technologies, projectType, projectImage } =
    req.body;
  const { id } = req.params;
  try {
    const project = await Project.findById(id);
    if (!project) return res.status(404).json({ message: "Project not found" });
    if (title !== undefined) project.title = title;
    if (repoUrl !== undefined) project.repoUrl = repoUrl;
    if (liveUrl !== undefined) project.liveUrl = liveUrl;
    if (technologies !== undefined) project.technologies = technologies;
    if (projectType !== undefined) project.projectType = projectType;
    if (projectImage !== undefined) project.projectImage = projectImage;
    await project.save();
    res.status(202).json(project);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteProject = async (req, res) => {
  const { id } = req.params;
  try {
    const project = await Project.findById(id);
    if (!project) return res.status(404).json({ message: "Project not found" });
    await project.remove();
    res.status(200).json({ message: "Project deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
