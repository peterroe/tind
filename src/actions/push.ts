import { cli } from '../utils'

export async function push() {
  cli('git add . && git commit -m "update" && git push')
}
