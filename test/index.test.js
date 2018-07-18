const validate = require('../src/validate')
const expect = require('chai').expect

describe('Validate updated package version', function () {
  it('local version > remote version: validate ok', async () => {
    validate('1.2.3', '11.2.3')
  })

  it('local version < remote version: throw error', async () => {
    const versionLatest = '1.2.3'
    const versionUpdate = '0.12.3'
    expect(validate.bind(null, versionLatest, versionUpdate)).to.throw(`
      Package version lesser than the version already published.
      Remote package version: ${versionLatest}
      Local package version: ${versionUpdate}
    `)
  })

  it('local version = remote version: throw error', async () => {
    const versionLatest = '1.2.3'
    const versionUpdate = '1.2.3'
    expect(validate.bind(null, versionLatest, versionUpdate)).to.throw(`
      Package version identical to the version already published.
      Remote package version: ${versionLatest}
      Local package version: ${versionUpdate}
    `)
  })
})
