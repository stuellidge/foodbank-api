import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'
import Env from '@ioc:Adonis/Core/Env'


export default class UserSeeder extends BaseSeeder {
  public async run() {
    await User.updateOrCreate({ email: Env.get('ADMIN_EMAIL') }, {
      email: Env.get('ADMIN_EMAIL'),
      title: Env.get('ADMIN_TITLE'),
      forename: Env.get('ADMIN_FORENAME'),
      surname: Env.get('ADMIN_SURNAME'),
      password: Env.get('ADMIN_PASSWORD')
    });
  }
}
