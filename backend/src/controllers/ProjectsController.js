const Projects = require('../models/ProjectsModel');

module.exports = {

  async findAll(_req, res) {
    const data = await Projects.find();

    return res.json(data);
  },

  async create(req, res) {
    const { title, description } = req.body;
    const projectsCreated = await Projects.create({
      title,
      description
    });

    return res.json(projectsCreated)
  }
}