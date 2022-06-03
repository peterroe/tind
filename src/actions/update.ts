import inquirer from 'inquirer'
import type { accountType } from '../types'
import { getPassWordJson, postPassWordJson } from '../utils'

export async function update() {
  const accounts: accountType[] = await getPassWordJson()

  const { id } = await inquirer.prompt({
    type: 'list',
    name: 'id',
    message: '请选择要修改的账户',
    choices: accounts.map(it => `${it.id}: ${it.description} - ${it.username}@${it.password}`),
    filter: it => Number(it.split(':')[0].trim()),
  })

  const { field } = await inquirer.prompt({
    type: 'list',
    name: 'field',
    message: '请选择要修改的字段',
    choices: ['description', 'username', 'password'],
  })

  const { value } = await inquirer.prompt({
    type: 'input',
    name: 'value',
    message: '请输入新的值',
  })

  const targetIndex = accounts.findIndex(it => it.id === id)

  accounts[targetIndex][field] = value

  postPassWordJson(accounts)
}
