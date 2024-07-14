const express = require('express');
const routes = express.Router();

const ProjectsController = require('./controllers/ProjectsController');

routes.get('/api/projects', ProjectsController.findAll);
routes.post('/api/projects', ProjectsController.create);
routes.put('/api/projects/:id', ProjectsController.updade);
routes.delete('/api/projects/:id', ProjectsController.delete);

module.exports = routes;