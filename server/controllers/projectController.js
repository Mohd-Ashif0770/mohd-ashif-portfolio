const Project = require('../models/Project');

// Get all projects
exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get single project by ID or slug
exports.getProject = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.findOne({
      $or: [{ _id: id }, { slug: id }],
    });

    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    res.json(project);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create project (admin only)
exports.createProject = async (req, res) => {
  try {
    const {
      title,
      slug,
      shortDescription,
      longDescription,
      techStack,
      githubUrl,
      liveUrl,
      imageUrl,
    } = req.body;

    // Handle image upload
    const finalImageUrl = req.file
      ? `/uploads/${req.file.filename}`
      : imageUrl || '';

    // Handle techStack - can be array or comma-separated string
    let techStackArray = [];
    if (Array.isArray(techStack)) {
      techStackArray = techStack.filter(Boolean);
    } else if (typeof techStack === 'string' && techStack.trim()) {
      techStackArray = techStack.split(',').map((tech) => tech.trim()).filter(Boolean);
    }

    const project = new Project({
      title,
      slug,
      shortDescription,
      longDescription,
      techStack: techStackArray,
      githubUrl,
      liveUrl,
      imageUrl: finalImageUrl,
    });

    await project.save();
    res.status(201).json(project);
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ message: 'Project slug already exists' });
    }
    res.status(400).json({ message: error.message });
  }
};

// Update project (admin only)
exports.updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = { ...req.body };

    // Handle techStack - can be array or comma-separated string
    if (updateData.techStack) {
      if (Array.isArray(updateData.techStack)) {
        updateData.techStack = updateData.techStack.filter(Boolean);
      } else if (typeof updateData.techStack === 'string') {
        updateData.techStack = updateData.techStack.split(',').map((tech) => tech.trim()).filter(Boolean);
      }
    }

    // Handle image upload
    if (req.file) {
      updateData.imageUrl = `/uploads/${req.file.filename}`;
    }

    const project = await Project.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });

    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    res.json(project);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete project (admin only)
exports.deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.findByIdAndDelete(id);

    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    res.json({ message: 'Project deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

