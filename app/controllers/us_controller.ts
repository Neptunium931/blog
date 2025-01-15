import type { HttpContext } from '@adonisjs/core/http'

export default class UsController {
  async about({ view }: HttpContext) {
    return view.render('pages/us')
  }
  async contact({ view }: HttpContext) {
    return view.render('pages/contact')
  }
}
