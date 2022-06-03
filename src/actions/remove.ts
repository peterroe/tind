import inquirer from 'inquirer'

export function remove() {
  inquirer
  .prompt({
    type: 'list',
    name: 'sdsfsdf',
    choices: [234,434,65]
  })
  .then((answers) => {
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
}
