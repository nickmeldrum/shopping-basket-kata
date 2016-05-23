const basketCreator = require('../../lib/basket')
const productLookup = require('../../lib/product')
const chai = require('chai')
const expect = chai.expect

describe('Feature: Calculate totals', function() {
    describe('Given the basket has 1 bread, 1 butter and 1 milk when I total the basket', function() {
        it('then the total should be £2.95', function() {
            const basket = basketCreator()
            basket.add(productLookup('bread'))
            basket.add(productLookup('butter'))
            basket.add(productLookup('milk'))
            
            expect(basket.getTotal()).to.equal(2.95)
        })
    })

    describe('Given the basket has 2 butter and 2 bread when I total the basket', function() {
        it.skip('then the total should be £3.10', function() {
        })
    })
})
