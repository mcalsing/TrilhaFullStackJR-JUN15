const express = require('express');
const routes = express.Router();

const ProjectController = require('./controllers/ProjectController');
const UserController = require('./controllers/UserController');
const validateCreation = require('./middlewares/validateUserCreation');
const validateProject = require('./middlewares/validateProject');
const validateToken = require('./middlewares/validateToken');
const validateLogin = require('./middlewares/validateLogin')

routes.get('/api/projects', ProjectController.getAll);
routes.post('/api/projects',validateProject, ProjectController.create);
routes.put('/api/projects/:id',validateProject, ProjectController.update);
routes.delete('/api/projects/:id', ProjectController.delete);


routes.post('/login', validateLogin, UserController.login);

routes.get('/user', UserController.getAll);
routes.post('/user', validateCreation, UserController.create);
routes.get('/user/:id', validateToken, UserController.getById);
routes.delete('/user/:id', UserController.delete);

module.exports = routes;