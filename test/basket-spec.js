const chai = require('chai')
const expect = chai.expect
const basket = require('../lib/basket')

describe('shopping basket', function() {
    context('totals', function() {
        it('empty basket returns a total of zero', function() {
            expect(basket.getTotal()).to.equal(0)
        })
    })

    context('defensive tests', function() {
        it('add undefined throws exception', function() {
            expect(() => basket.add()).to.throw()
        })

        it('add null throws exception', function() {
            expect(() => basket.add(null)).to.throw()
        })

        it('product without cost throws exception', function() {
            expect(() => basket.add({})).to.throw()
        })

        it('cost not a number throws exception', function() {
            expect(() => basket.add({cost: 'a string'})).to.throw()
        })

        it('product has no name throws exception', function() {
            expect(() => basket.add({cost: 1})).to.throw()
        })

        it('product name not a string throws exception', function() {
            expect(() => basket.add({name: 1, cost: 1})).to.throw()
        })

        it('product with string name and numeric cost does not throw', function() {
            expect(() => basket.add({name: 'name', cost: 1})).to.not.throw()
        })
    })
})
