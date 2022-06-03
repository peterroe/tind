import inquirer from 'inquirer'
import { getPassWordJson, postPassWordJson } from '../utils'
import type { accountType } from '../types'

export async function remove() {
  const accounts: accountType[] = await getPassWordJson()
  const data = await inquirer.prompt({
    type: 'list',
    name: 'chosen',
    choices: accounts.map(it => JSON.stringify(it)),
    filter: it => JSON.parse(it),
  })
  const { id } = data.chosen
  accounts.splice(accounts.findIndex(it => it.id === id), 1)
  postPassWordJson(accounts)
}
