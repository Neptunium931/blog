/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import rootsController from '#controllers/roots_controller'
import UsController from '#controllers/us_controller'

router.get('/', [rootsController, 'show'])
router.get('/about', [UsController, 'about'])
router.get('/contact', [UsController, 'contact'])
