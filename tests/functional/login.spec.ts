import { test } from '@japa/runner'
import Env from '@ioc:Adonis/Core/Env'


test.group('Login', () => {
  test('login', async ({client}) => {
    const response = await client.post('/login').form({
      email: Env.get('ADMIN_EMAIL'),
      password: Env.get('ADMIN_PASSWORD')
    })
    response.assertStatus(200)
  }),
  test('failed login', async ({client}) => {
    const response = await client.post('/login').form({
      email: Env.get('ADMIN_EMAIL'),
      password: 'secret'
    })
    response.assertStatus(400)
    console.log(response.body())
  })  
})
