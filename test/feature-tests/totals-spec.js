'use strict'

const chai = require('chai')
const expect = chai.expect

const productLookup = require('../../lib/product')
const discountLookup = require('../../lib/discount-lookup')
const basketCreator = require('../../lib/basket')

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
        it('then the total should be £3.10', function() {
            const basket = basketCreator()
            basket.add(productLookup('bread'), 2)
            basket.add(productLookup('butter'), 2)
            
            expect(basket.getTotal(discountLookup)).to.equal(3.10)
        })
    })

    describe('Given the basket has 4 milk when I total the basket', function() {
        it('then the total should be £3.45', function() {
            const basket = basketCreator()
            basket.add(productLookup('milk'), 4)
            
            expect(basket.getTotal(discountLookup)).to.equal(3.45)
        })
    })
})
