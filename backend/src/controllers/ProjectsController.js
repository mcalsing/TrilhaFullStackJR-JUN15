const Projects = require('../models/ProjectsModel');

module.exports = {

  async findAll(_req, res) {
    const data = await Projects.find();

    return res.json(data);
  },

  async create(req, res) {
    const { title, description } = req.body;

    if (!title || !description) {
      return res.status(400).json({ error: "Necessário um título/descrição"})
    }

    const projectCreated = await Projects.create({ title, description });

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

    const updadeProject = await Projects.findByIdAndUpdate(id, { title, description });

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

    const deleteProject = await Projects.findByIdAndDelete(id);

    if (deleteProject) {
      return res.json(deleteProject);
    }

    return res.status(401).json({ error: "Registro não encontrado!" });
  }
}