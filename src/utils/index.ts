import os from 'os'
import path from 'path'
import ora from 'ora'

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
