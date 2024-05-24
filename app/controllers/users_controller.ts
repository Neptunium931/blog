import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'

export default class UsersController {
  async list({}: HttpContext) {
    const users = await User.all()
    return users
  }
}
