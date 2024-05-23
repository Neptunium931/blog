/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

import AuthController from '#controllers/auth_controller'
import UsersController from '#controllers/users_controller'
import { middleware } from '#start/kernel'

router.on('/').render('pages/home').as('home')

router.get('users', [UsersController, 'list']).as('users')

router.group(() => {
  router.get('login', [AuthController, 'showLoginForm'])
  router.post('login', [AuthController, 'login']).as('login')
  router.get('register', [AuthController, 'showRegisterForm'])
  router.post('register', [AuthController, 'register']).as('register')
}).middleware(middleware.guest())

router.group(() => {
  router.get('logout', [AuthController, 'logout']).as('logout')
}).middleware(middleware.auth())
