import pkg from '../package.json'
import cli from './cli'
import { add, find, login, push, quickFind, remove, show, update } from './actions'

// cli.option('--type <type>', 'Choose a project type', {
//   default: 'node',
// })

// cli.option('--name <name>', 'Provide your name')

cli
  .command('login', 'inject your github repo')
  .action(login)

cli
  .command('add', 'new acount')
  .action(add)

cli
  .command('show', 'show all acounts')
  .action(show)

cli
  .command('push', 'push to github')
  .action(push)

cli
  .command('remove', 'delete account')
  .option('--id <id>', 'delete account by id')
  .action(remove)

cli
  .command('update', 'update account')
  .action(update)

cli
  .command('find', 'find account')
  .action(find)

cli
  .command('quickFind', 'quick find account')
  .action(quickFind)

cli.help()
cli.version(pkg.version)
cli.parse()
