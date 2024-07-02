/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'

const AuthController = () => import('#controllers/auth_controller')
const UsersController = () => import('#controllers/users_controller')

router.on('/').render('pages/home').as('home')

router
  .group(() => {
    router.get('login', [AuthController, 'showLoginForm'])
    router.post('login', [AuthController, 'login']).as('login')
    router.get('register', [AuthController, 'showRegisterForm'])
    router.post('register', [AuthController, 'register']).as('register')
  })
  .middleware(middleware.guest())

router
  .group(() => {
    router.get('logout', [AuthController, 'logout']).as('logout')
    router.get('users', [UsersController, 'list']).as('users')
  })
  .middleware(middleware.auth())
