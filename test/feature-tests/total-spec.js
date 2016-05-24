'use strict'

const chai = require('chai')
const expect = chai.expect

const product = require('../../lib/product')
const discount = require('../../lib/discount')
const basketFactory = require('../../lib/basket')

describe('Feature: Calculate totals', function() {
    describe('Given the basket has 1 bread, 1 butter and 1 milk when I total the basket', function() {
        it('then the total should be £2.95', function() {
            const basket = basketFactory()
            basket.add(product.products('bread'))
            basket.add(product.products('butter'))
            basket.add(product.products('milk'))
            
            expect(basket.getTotal()).to.equal(2.95)
        })
    })

    describe('Given the basket has 2 butter and 2 bread when I total the basket', function() {
        it('then the total should be £3.10', function() {
            const basket = basketFactory()
            basket.add(product.products('bread'), 2)
            basket.add(product.products('butter'), 2)
            
            expect(basket.getTotal(discount.discounts)).to.equal(3.10)
        })
    })

    describe('Given the basket has 4 milk when I total the basket', function() {
        it('then the total should be £3.45', function() {
            const basket = basketFactory()
            basket.add(product.products('milk'), 4)
            
            expect(basket.getTotal(discount.discounts)).to.equal(3.45)
        })
    })

    describe('Given the basket has 2 butter, 1 bread and 8 milk when I total the basket', function() {
        it('then the total should be £9.00', function() {
            const basket = basketFactory()
            basket.add(product.products('milk'), 4)
            
            expect(basket.getTotal(discount.discounts)).to.equal(3.45)
        })
    })
})
