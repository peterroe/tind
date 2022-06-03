import { spawn } from 'child_process'
import { execa } from 'execa'
import { dotTind } from '../utils'

export async function push() {
  spawn('git add . && git commit -m "feat" && git pull origin master && git push origin master', {
    stdio: 'inherit',
    shell: true,
    cwd: dotTind,
  })
}
