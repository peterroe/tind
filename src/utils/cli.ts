import { spawn } from 'child_process'
import { dotTind } from '../utils'

export function cli(command) {
  spawn(command, {
    stdio: 'inherit',
    shell: true,
    cwd: dotTind,
  })
}
