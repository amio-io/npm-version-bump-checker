const semver = require('semver')

const validate = (versionLatest, versionUpdate) => {
  if(semver.gt(versionLatest, versionUpdate)){
    throw new Error(`
      Package version lesser than the version already published.
      Original package version: ${versionLatest}
      Updated package version: ${versionUpdate}
    `)
  }

  if(versionLatest === versionUpdate) {
    throw new Error(`
      Package version identical to the version already published.
      Original package version: ${versionLatest}
      Updated package version: ${versionUpdate}
    `)
  }

  console.log('Original package version:', versionLatest)
  console.log('Updated package version:', versionUpdate)
}

module.exports = validate
