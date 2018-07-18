#!/usr/bin/env node
const validate = require('./validate')

process.stdin.once('readable', () => {
  const versionLatest = process.stdin
    .read()
    .toString()
    .trim()

  const versionUpdate = process.env.npm_package_version
    .toString()
    .trim()

  validate(versionLatest, versionUpdate)
})
