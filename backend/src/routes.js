const express = require('express');
const routes = express.Router();

const ProjectController = require('./controllers/ProjectController');
const UserController = require('./controllers/UserController');
const validateCreation = require('./middlewares/validateUserCreation');
const validateProject = require('./middlewares/validateProject');
const validateToken = require('./middlewares/validateToken');
const validateLogin = require('./middlewares/validateLogin')

routes.get('/projects', ProjectController.getAll);
routes.post('/projects',validateProject, ProjectController.create);
routes.put('/projects/:id',validateProject, ProjectController.update);
routes.delete('/projects/:id', ProjectController.delete);


routes.post('/login', validateLogin, UserController.login);

routes.get('/user', UserController.getAll);
routes.post('/user', validateCreation, UserController.create);
routes.get('/user/:id', validateToken, UserController.getById);
routes.delete('/user/:id', UserController.delete);

module.exports = routes;