const chai = require('chai')
const expect = chai.expect
const basket = require('../lib/basket')

describe('shopping basket', function() {
    it('empty basket returns a total of zero', function() {
        expect(basket.getTotal()).to.equal(0)
    })
})
