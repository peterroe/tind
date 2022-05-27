import { cac } from 'cac'
import pkg from '../package.json'
import add from './add'
const cli = cac()

cli.option('--type <type>', 'Choose a project type', {
  default: 'node',
})

cli.option('--name <name>', 'Provide your name')

cli.command('add [...files]', 'Lint files').action(add)
// cli.command('update [...files]', 'Lint files').action(update)

cli.help()
cli.version(pkg.version)
cli.parse()
