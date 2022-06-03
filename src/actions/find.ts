import inquirer from 'inquirer'
import type { accountType } from '../types'
import { getPassWordJson } from '../utils'

export async function find() {
  const { field } = await inquirer.prompt({
    type: 'list',
    name: 'field',
    message: 'Please select the field you are looking for',
    choices: ['description', 'username', 'password'],
  })

  const { value } = await inquirer.prompt({
    type: 'input',
    name: 'value',
    message: 'Please enter the value you are looking for',
  })

  const accounts: accountType[] = getPassWordJson()

  const result: accountType[] = accounts.filter(it => it[field].includes(value))

  console.table(result, ['description', 'username', 'password'])
}

export async function quickFind() {
  const { value } = await inquirer.prompt({
    type: 'input',
    name: 'value',
    message: 'Please enter the value you are looking for',
  })

  const accounts: accountType[] = getPassWordJson()

  const result: accountType[] = accounts.filter((it: accountType) => {
    const fields: accountType = ['description', 'username', 'password']
    return fields.some(field => it[field].includes(value))
  })

  console.table(result, ['description', 'username', 'password'])
}
