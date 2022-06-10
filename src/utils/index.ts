import os from 'os'
import path from 'path'
import fs from 'fs-extra'
import ora from 'ora'
import type { accountType } from '../types'

export const home = os.homedir()

export const dotTind = path.resolve(os.homedir(), '.tind')
// eg: /Users/bytedance/.tind

export const passWordJson = path.resolve(dotTind, 'password.json')
// eg: /Users/bytedance/.tind/password.json

/**
 * @description: Add animation for time consuming task
 * @param {string} beginWord
 * @param {string} endWord
 * @param {Function} callBack
 */
export function showAnimationLoading(
  beginWord: string,
  endWord: string,
  callBack: Function
) {
  const spinner = ora(beginWord).start()
  callBack()
  spinner.succeed(endWord)
}

/**
 * @description: Get content of password.json
 * @return content
 */
export function getPassWordJson(): Promise<accountType[]> {
  // https://github.com/jprichardson/node-fs-extra/blob/master/docs/readJson-sync.md
  return fs.readJsonSync(passWordJson, { throws: false }) || []
}

/**
 * @description: Update content of password.json
 * @param {accountType} newAccounts new Content
 */
export function postPassWordJson(newAccounts: accountType[]) {
  return fs.writeJsonSync(passWordJson, newAccounts) || []
}

/**
 * @description: Find the max id in a accountType array
 * @param {accountType} accounts
 */
export function getMaxId(accounts: accountType[]): number {
  return accounts.reduce((maxId, account) => {
    return account.id > maxId ? account.id : maxId
  }, 0)
}
