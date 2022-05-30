import Enquirer from 'enquirer'
import { execa } from 'execa'
import fs from 'fs-extra'
import { dotTind, passWordJson, showAnimation } from '../utils'
const enquirer = new Enquirer()

export async function login() {
  const { repo } = await enquirer.prompt([
    {
      type: 'input',
      name: 'repo',
      message: 'What is your repo address?',
    },
  ])
  showAnimation('clone repo to local...', 'login success!', async () => {
    const res = await fs.ensureDir(dotTind)
    res && await execa('git', ['clone', repo, passWordJson]) // clone to local if none
    await fs.ensureFile(passWordJson)
  })
}
