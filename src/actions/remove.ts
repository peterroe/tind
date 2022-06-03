import inquirer from 'inquirer'
import consola from 'consola'
import { getPassWordJson, postPassWordJson } from '../utils'
import type { accountType } from '../types'

export async function remove() {
  const accounts: accountType[] = await getPassWordJson()

  const { id } = await inquirer.prompt({
    type: 'list',
    name: 'id',
    message: '请选择要删除的账户',
    choices: accounts.map(it => `${it.id}: ${it.description} - ${it.username}@${it.password}`),
    filter: it => Number(it.split(':')[0].trim()),
  })

  const targetIndex = accounts.findIndex(it => it.id === id)

  accounts.splice(targetIndex, 1)
  postPassWordJson(accounts)

  consola.success('删除成功')
}
