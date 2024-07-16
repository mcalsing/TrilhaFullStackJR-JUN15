const express = require('express');
const routes = express.Router();

const ProjectController = require('./controllers/ProjectController');
const UserController = require('./controllers/UserController');
const validateCreation = require('./middlewares/validateUserCreation');
const validateProject = require('./middlewares/validateProject');

routes.get('/api/projects', ProjectController.getAll);
routes.post('/api/projects',validateProject, ProjectController.create);
routes.put('/api/projects/:id',validateProject, ProjectController.updade);
routes.delete('/api/projects/:id', ProjectController.delete);

routes.get('/user', UserController.getAll);
routes.post('/user', validateCreation, UserController.create);
routes.delete('/user/:id', UserController.delete);

module.exports = routes;