import Enquirer from 'enquirer'

const enquirer = new Enquirer()

function add() {
  enquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your usename?',
    },
    {
      type: 'input',
      name: 'password',
      message: 'What is your password?',
    },
  ]).then(({ name, password }) => {
    console.log(`Hello ${name}!`)
    console.log(`Your password is ${password}`)
  })
}

export default add
