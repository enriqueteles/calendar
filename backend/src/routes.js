const express = require('express');

const UserController = require('./controllers/UserController');
const EventController = require('./controllers/EventController');

const connection = require('./database/connection');

const routes = express.Router();

routes.get('/users', UserController.index); // debug only, delete on production
routes.post('/register', UserController.register);
routes.post('/login', UserController.login);

routes.get('/events', UserController.auth, EventController.index);
routes.post('/events', UserController.auth, EventController.create);
routes.patch('/events/:id', UserController.auth, EventController.update);
routes.delete('/events/:id', UserController.auth, EventController.delete);

module.exports =  routes;