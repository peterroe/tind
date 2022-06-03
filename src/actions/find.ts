import inquirer from 'inquirer'
import type { accountType } from '../types'
import { getPassWordJson } from '../utils'

export async function find() {
  const { field } = await inquirer.prompt({
    type: 'list',
    name: 'field',
    message: '请选择要查找的字段',
    choices: ['description', 'username', 'password'],
  })

  const { value } = await inquirer.prompt({
    type: 'input',
    name: 'value',
    message: '请输入要查找的值',
  })

  const accounts: accountType[] = getPassWordJson()

  const result: accountType[] = accounts.filter(it => it[field].includes(value))

  console.table(result, ['description', 'username', 'password'])
}

export async function quickFind() {
  const { value } = await inquirer.prompt({
    type: 'input',
    name: 'value',
    message: '请输入要查找的值',
  })

  const accounts: accountType[] = getPassWordJson()

  const result: accountType[] = accounts.filter((it: accountType) => {
    const fields: accountType = ['description', 'username', 'password']
    return fields.some(field => it[field].includes(value))
  })

  console.table(result, ['description', 'username', 'password'])
}
