'use strict'

const test = require('tape')
const { CLIEngine } = require('eslint')
const { devDependencies, peerDependencies } = require('./package.json')

test('eslint\'s devDependency and peerDependency match', t => {
  t.is(`>=${devDependencies.eslint}`, peerDependencies.eslint)
  t.end()
})

test('config loads and is executed on current directory', t => {
  const cli = new CLIEngine()
  const { errorCount, results: { length } } = cli.executeOnFiles(['.'])

  t.is(length, 2)
  t.is(errorCount, 0)
  t.end()
})
