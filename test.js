'use strict'

const test = require('ava')
const { CLIEngine } = require('eslint')
const { devDependencies, peerDependencies } = require('./package.json')

test('eslint\'s devDependency and peerDependency match', t => {
  t.is(`>=${devDependencies.eslint}`, peerDependencies.eslint)
})

test('config loads and is executed on current directory', t => {
  const cli = new CLIEngine()
  const { errorCount, results: { length } } = cli.executeOnFiles(['.'])

  t.is(length, 5)
  t.is(errorCount, 0)
})
