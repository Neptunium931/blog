// import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'

export default class UsersController {
  public async list({ view }: HttpContext) {
    const users = await User.all()
    return users
  }
}
