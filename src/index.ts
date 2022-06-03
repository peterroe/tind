import pkg from '../package.json'
import cli from './cli'
import { add, login, push, remove, show, update } from './actions'

cli.option('--type <type>', 'Choose a project type', {
  default: 'node',
})

cli.option('--name <name>', 'Provide your name')

cli.command('login', 'inject your github repo').action(login)
cli.command('add', 'new acount').action(add)
cli.command('show', 'show all acounts').action(show)
cli.command('push', 'push to github').action(push)
cli.command('remove', 'delete account').action(remove)
cli.command('update', 'update account').action(update)

cli.help()
cli.version(pkg.version)
cli.parse()
