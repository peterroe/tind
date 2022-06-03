import inquirer from 'inquirer'
import type { accountType } from '../types'
import { getPassWordJson, postPassWordJson, getMaxId } from '../utils'

export async function add() {
  const account: accountType = await inquirer.prompt([
    {
      type: 'input',
      name: 'username',
      message: 'What is your usename?',
    },
    {
      type: 'input',
      name: 'password',
      message: 'What is your password?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'What is your description?',
    },
  ])
  const accounts = getPassWordJson()

  const id = getMaxId(accounts)
  account.id = id + 1
  accounts.push(account)

  postPassWordJson(accounts)
}
