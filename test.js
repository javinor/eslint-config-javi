'use strict'

const test = require('ava')
const { CLIEngine } = require('eslint')

test('config loads and is executed on current directory', t => {
  const cli = new CLIEngine()
  const { errorCount, results: { length } } = cli.executeOnFiles(['.'])

  t.is(length, 5)
  t.is(errorCount, 0)
})
