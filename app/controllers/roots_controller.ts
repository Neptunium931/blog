import type { HttpContext } from '@adonisjs/core/http'

export default class RootsController {
  async show({ view }: HttpContext) {
    return view.render('pages/root')
  }
}
