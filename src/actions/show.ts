import { getPassWordJson } from '../utils'
import type { accountType } from '../types'

export function show() {
  const accounts: accountType[] = getPassWordJson()
  const keys = ['description', 'username', 'password', 'id']

  console.table(accounts, keys)
}
