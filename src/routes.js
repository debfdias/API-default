import { Router } from 'express'

import UserController from './app/controllers/UserController'
import SessionController from './app/controllers/SessionController'; 

import authMiddleware from './app/middlewares/auth'

const routes = new Router()

routes.post('/signup', UserController.store)
routes.post('/signin', SessionController.store)

routes.get('/user', authMiddleware, UserController.show)
routes.get('/users', authMiddleware, UserController.index)
routes.put('/users', authMiddleware, UserController.update)
routes.delete('/users/:id?', authMiddleware, UserController.delete)

export default routes