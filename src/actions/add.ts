import inquirer from 'inquirer'
import type { accountType } from '../types'
import { getPassWordJson, postPassWordJson } from '../utils'

export function add() {
  inquirer.prompt([
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
  ]).then((account: accountType) => {
    // console.log(`Hello ${username}!`)
    // console.log(`Your password is ${password}`)
    // console.log(`Your description is ${description}`)
    const accounts = getPassWordJson()
    accounts.push(account)
    postPassWordJson(accounts)
  })
}
