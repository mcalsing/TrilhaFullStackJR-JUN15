const express = require('express');
const routes = express.Router();

const ProjectsController = require('./controllers/ProjectsController');

routes.get('/api/projects', ProjectsController.findAll);

module.exports = routes;