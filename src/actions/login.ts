import Enquirer from 'enquirer'
import { execa } from 'execa'
import fs from 'fs-extra'
import { dotTind, passWordJson, showAnimationLoading } from '../utils'
const enquirer = new Enquirer()

export async function login() {
  const { name } = await enquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your acount name?',
    },
  ])
  const hub = `git@github.com:${name}/password.git`
  showAnimationLoading('clone repo to local...', 'login success!', async () => {
    const res = await fs.ensureDir(dotTind)
    res && (await execa('git', ['clone', hub, dotTind])) // clone to local if none
    await fs.ensureFile(passWordJson)
  })
}
