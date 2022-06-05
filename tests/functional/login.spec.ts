import { test } from '@japa/runner'
import Env from '@ioc:Adonis/Core/Env'
import User from 'App/Models/User'


test.group('Login', () => {
  test('log_in_out', async ({client, assert}) => {
    const response = await client.post('/login').form({
      email: Env.get('ADMIN_EMAIL'),
      password: Env.get('ADMIN_PASSWORD')
    })
    response.assertStatus(200)
    
    const user = await User.findByOrFail('email', Env.get('ADMIN_EMAIL'))
    assert.isNotNull(user);
    const response2 = await client.post('/logout').loginAs(user)
    response2.assertStatus(200)
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
