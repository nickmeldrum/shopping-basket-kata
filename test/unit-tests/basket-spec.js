'use strict'

const chai = require('chai')
const expect = chai.expect
const basketFactory = require('../../lib/basket')

describe('shopping basket', function() {
    context('totals', function() {
        it('empty basket returns a total of zero', function() {
            const basket = basketFactory()
            expect(basket.getTotal()).to.equal(0)
        })

        it('basket with product with cost of 1 totals 1', function() {
            const basket = basketFactory()
            basket.add({name: 'something', cost: 1})
            expect(basket.getTotal()).to.equal(1)
        })

        it('basket with 2 products with cost of 1 each totals 2', function() {
            const basket = basketFactory()
            basket.add({name: 'something', cost: 1})
            basket.add({name: 'something else', cost: 1})
            expect(basket.getTotal()).to.equal(2)
        })

        it('add a quantity of 2 products and totals = twice the cost', function() {
            const basket = basketFactory()
            basket.add({name: 'something', cost: 1}, 2)
            expect(basket.getTotal()).to.equal(2)
        })
    })

    context('defensive tests', function() {
        it('add undefined throws exception', function() {
            const basket = basketFactory()
            expect(() => basket.add()).to.throw()
        })

        it('add null throws exception', function() {
            const basket = basketFactory()
            expect(() => basket.add(null)).to.throw()
        })

        it('product without cost throws exception', function() {
            const basket = basketFactory()
            expect(() => basket.add({})).to.throw()
        })

        it('cost not a number throws exception', function() {
            const basket = basketFactory()
            expect(() => basket.add({cost: 'a string'})).to.throw()
        })

        it('product has no name throws exception', function() {
            const basket = basketFactory()
            expect(() => basket.add({cost: 1})).to.throw()
        })

        it('product name not a string throws exception', function() {
            const basket = basketFactory()
            expect(() => basket.add({name: 1, cost: 1})).to.throw()
        })

        it('product with string name and numeric cost does not throw', function() {
            const basket = basketFactory()
            expect(() => basket.add({name: 'name', cost: 1})).to.not.throw()
        })
    })
})
