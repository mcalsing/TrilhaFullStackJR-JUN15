const express = require('express');
const routes = express.Router();

const ProjectController = require('./controllers/ProjectController');
const UserController = require('./controllers/UserController')

routes.get('/api/projects', ProjectController.getAll);
routes.post('/api/projects', ProjectController.create);
routes.put('/api/projects/:id', ProjectController.updade);
routes.delete('/api/projects/:id', ProjectController.delete);

routes.get('/user', UserController.getAll);
routes.post('/user', UserController.create);
routes.delete('/user/:id', UserController.delete);

module.exports = routes;