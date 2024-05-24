import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'

export default class AuthController {
  showLoginForm({ view }: HttpContext) {
    return view.render('auth/login')
  }

  async login({ request, auth, response }: HttpContext) {
    const { email, password } = request.only(['email', 'password'])

    const user = await User.verifyCredentials(email, password)

    await auth.use('web').login(user)

    return response.redirect().back()
  }

  async logout({ auth, response }: HttpContext) {
    await auth.use('web').logout()

    return response.redirect().back()
  }

  showRegisterForm({ view }: HttpContext) {
    return view.render('auth/register')
  }

  async register({ request, auth, response }: HttpContext) {
    const data = request.only(['username', 'email', 'password'])

    const user = await User.create(data)

    await auth.use('web').login(user)

    return response.redirect().toRoute('home')
  }
}
