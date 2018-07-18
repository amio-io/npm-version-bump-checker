const semver = require('semver')

const validate = (versionLatest, versionUpdate) => {
  if(semver.gt(versionLatest, versionUpdate)){
    throw new Error(`
      Package version lesser than the version already published.
      Remote package version: ${versionLatest}
      Local package version: ${versionUpdate}
    `)
  }

  if(versionLatest === versionUpdate) {
    throw new Error(`
      Package version identical to the version already published.
      Remote package version: ${versionLatest}
      Local package version: ${versionUpdate}
    `)
  }

  console.log('Remote package version:', versionLatest)
  console.log('Local package version:', versionUpdate)
}

module.exports = validate
