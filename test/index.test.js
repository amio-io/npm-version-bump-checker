const validate = require('../src/validate')
const expect = require('chai').expect

describe('Validate updated package version', function () {
  it('Validate an updated package version', async () => {
    validate('1.2.3', '11.2.3')
  })

  it('Throw error for lesser package version', async () => {
    expect(validate.bind(null, '1.2.3', '0.12.3')).to.throw()
  })

  it('Throw error for identical package version', async () => {
    expect(validate.bind(null, '1.2.3', '1.2.3')).to.throw()
  })
})
