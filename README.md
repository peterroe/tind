## Tind

<p align="center">
  <img src="http://rcwqxz0v4.hn-bkt.clouddn.com/download.png" />
</p>

Password manager for the terminal.

## Install

```shell
$ npm install -g tind
```

## Login

First, you need to create a **new** and **private** repository, and make sure it has a `.git` directory. Such as: `https://github.com/peterroe/password`.

Then, you can login to the repository:

```shell
$ tind login
? What is your repo address? › https://github.com/peterroe/password
```

## Usage

<p align="center">
  <img src="http://rcwqxz0v4.hn-bkt.clouddn.com/Snipaste_2022-06-04_00-56-44.png">
</p>

## More

```
$ tind -h 
tind/2.0.0

Usage:
  $ tind <command> [options]

Commands:
  login      inject your github repo
  add        new acount
  show       show all acounts
  push       push to github
  remove     delete account
  update     update account
  find       find account
  quickFind  quick find account

For more info, run any command with the `--help` flag:
  $ tind login --help
  $ tind add --help
  $ tind show --help
  $ tind push --help
  $ tind remove --help
  $ tind update --help
  $ tind find --help
  $ tind quickFind --help

Options:
  -h, --help     Display this message 
  -v, --version  Display version number 
```