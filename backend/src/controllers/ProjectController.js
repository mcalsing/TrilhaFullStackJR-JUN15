const Project = require('../models/ProjectModel');

module.exports = {

  async getAll(_req, res) {
    const data = await Project.find();

    return res.json(data);
  },

  async create(req, res) {
    const { createdByUserId, title, description } = req.body;
    
    const projectCreated = await Project.create({ createdByUserId, title, description });

    return res.json(projectCreated);
  },

  async update(req, res) {
    const { title, description } = req.body;
    const { id } = req.params;

    if (id.length !== 24) {
      return res.status(401).json({ error: "ID deve ter 24 characteres"})
    }

    const updateProject = await Project.findByIdAndUpdate(id, { title, description }, { new: true });

    if (updateProject) {
      return res.json(updateProject);
    }

    return res.status(401).json({ error: "Registro não encontrado!"});
  },

  async delete(req, res) {
    const { id } = req.params;
    if (id.length !== 24) {
      return res.status(401).json({ error: "ID deve ter 24 characters"})
    }

    const deleteProject = await Project.findByIdAndDelete(id);

    if (deleteProject) {
      return res.json(deleteProject);
    }

    return res.status(401).json({ error: "Registro não encontrado!" });
  }
}