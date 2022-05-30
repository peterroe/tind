import { cac } from 'cac'
import pkg from '../package.json'
import { add, login } from './actions'
const cli = cac()

cli.option('--type <type>', 'Choose a project type', {
  default: 'node',
})

cli.option('--name <name>', 'Provide your name')

cli.command('login', 'inject your github repo').action(login)
cli.command('add', 'new acount').action(add)
// cli.command('add [...files]', 'Lint files').action(add)
// cli.command('update [...files]', 'Lint files').action(update)

cli.help()
cli.version(pkg.version)
cli.parse()
