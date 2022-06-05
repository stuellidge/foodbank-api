import { test } from '@japa/runner'
import Env from '@ioc:Adonis/Core/Env'
import User from 'App/Models/User'

test('display welcome page', async ({ client, assert }) => {
  const user = await User.findByOrFail('email', Env.get('ADMIN_EMAIL'))
  assert.isNotNull(user);
  const response = await client.get('/').loginAs(user)

  response.assertStatus(200)
  response.assertBodyContains({ hello: 'world' })
})
