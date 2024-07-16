const Project = require('../models/ProjectModel');

module.exports = {

  async getAll(_req, res) {
    const data = await Project.find();

    return res.json(data);
  },

  async create(req, res) {
    const { title, description } = req.body;

    if (!title || !description) {
      return res.status(400).json({ error: "Necessário um título/descrição"})
    }

    const projectCreated = await Project.create({ title, description });

    return res.json(projectCreated)
  },

  async updade(req, res) {
    const { title, description } = req.body;
    const { id } = req.params;

    if (id.length !== 24) {
      return res.status(401).json({ error: "ID deve ter 24 characteres"})
    }

    if (!title || !description) {
      return res.status(400).json({ error: "Necessário um título/descrição"})
    }

    const updadeProject = await Project.findByIdAndUpdate(id, { title, description });

    if (updadeProject) {
      return res.json(updadeProject);
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