import { test } from '@japa/runner'
import User from 'App/Models/User'
import Env from '@ioc:Adonis/Core/Env'

  test.group('Basic user test', () => {
    test('get the admin user', async ({assert}) => {
      const user = await User.findByOrFail('email', Env.get('ADMIN_EMAIL'));
      assert.isNotNull(user);
      assert.equal(user.email, Env.get('ADMIN_EMAIL'));
      assert.equal(user.title, Env.get('ADMIN_TITLE'));
      assert.equal(user.forename, Env.get('ADMIN_FORENAME'));
      assert.equal(user.surname, Env.get('ADMIN_SURNAME'));
    }),
    test('ensure no user with bad email', async ({assert}) => {
      assert.rejects(async () => User.findByOrFail('email', '123'))
    })
  })
