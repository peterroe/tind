import os from 'os'
import path from 'path'
import fs from 'fs-extra'
import ora from 'ora'
import type { accountType } from '../types'

export const home = os.homedir()

export const dotTind = path.resolve(os.homedir(), '.tind')
// /Users/bytedance/.tind

export const passWordJson = path.resolve(dotTind, 'password.json')
// /Users/bytedance/.tind/password.json

export function showAnimationLoading(beginWord: string, endWord: string, callBack: Function) {
  const spinner = ora(beginWord).start()
  callBack()
  spinner.succeed(endWord)
}

export function getPassWordJson(): Promise<accountType[]> {
  // https://github.com/jprichardson/node-fs-extra/blob/master/docs/readJson-sync.md
  return fs.readJsonSync(passWordJson, { throws: false }) || []
}

export function postPassWordJson(newAccounts: accountType[]) {
  return fs.writeJsonSync(passWordJson, newAccounts) || []
}

export function getMaxId(accounts: accountType[]): number {
  return accounts.reduce((maxId, account) => {
    return account.id > maxId ? account.id : maxId
  }, 0)
}
