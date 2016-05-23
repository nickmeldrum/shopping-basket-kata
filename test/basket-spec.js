const chai = require('chai')
const expect = chai.expect
const basket = require('../lib/basket')

describe('shopping basket', function() {
    it('empty basket returns a total of zero', function() {
        expect(basket.getTotal()).to.equal(0)
    })

    it('add undefined throws exception', function() {
        expect(() => basket.add()).to.throw()
    })

    it('add null throws exception', function() {
        expect(() => basket.add(null)).to.throw()
    })

    it('item without cost throws exception', function() {
        expect(() => basket.add({})).to.throw()
    })
})
