const Projects = require('../models/ProjectsModel');

module.exports = {

  async findAll(_req, res) {
    const data = await Projects.find();

    return res.json(data);
  },
}