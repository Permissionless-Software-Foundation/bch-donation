/*
  Unit tests for the main library.
*/

const assert = require('chai').assert

const uut = require('../../index')

describe('#getAddress', () => {
  it('should get the donation address for PSF', () => {
    const knownAddr = 'bitcoincash:qqsrke9lh257tqen99dkyy2emh4uty0vky9y0z0lsr'

    const addr = uut('psf')
    // console.log(`addr: ${JSON.stringify(addr, null, 2)}`)

    assert.equal(addr.donations, knownAddr)
  })
})
