import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class Auth {
    public async login(ctx: HttpContextContract) {
        const email = ctx.request.input('email')
        const password = ctx.request.input('password')

        try {
            await ctx.auth.use('web').attempt(email, password)
        } catch (err) {
            return ctx.response.badRequest('Invalid credentials')
        }   
    }

    public async logout(ctx: HttpContextContract) {
        await ctx.auth.use('web').logout()
    }
}
