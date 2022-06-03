import inquirer from 'inquirer'
import consola from 'consola'
import { getPassWordJson, postPassWordJson } from '../utils'
import type { accountType } from '../types'

export async function remove({ id }) {
  const accounts: accountType[] = await getPassWordJson()
  if (!id) {
    id = (await inquirer.prompt({
      type: 'list',
      name: 'id',
      message: 'Please select an account to delete',
      choices: accounts.map(it => `${it.id}: ${it.description} - ${it.username}@${it.password}`),
      filter: it => Number(it.split(':')[0].trim()),
    })).id
  }

  const targetIndex = accounts.findIndex(it => it.id === id)

  accounts.splice(targetIndex, 1)
  postPassWordJson(accounts)

  consola.success('successfully deleted')
}
