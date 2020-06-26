const express = require('express')
const UserController = require('./controllers/UserController')
const EventController = require('./controllers/EventController')
const MinistryController = require('./controllers/MinistryController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router()


//Rota para Logon
routes.post('/sessions', SessionController.create)

//Rotas para o Usuário
routes.get('/ministries/:id/users', UserController.index)
routes.post('/ministries/:id/users', UserController.store)
routes.delete('/ministries/:id/users/:idu', UserController.destroy)

//Rotas para o Ministério
routes.get('/ministries', MinistryController.index)
routes.post('/ministries', MinistryController.store)
routes.get('/user/:id/ministries', MinistryController.index)

//Rotas para o Evento
routes.get('/ministries/:id/events', EventController.index)
routes.post('/ministries/:id/events', EventController.store)
routes.put('/ministries/:id/events/:ide', EventController.update)
routes.delete('/ministries/:id/events/:ide', EventController.destroy)

module.exports = routes