'use strict'

const chai = require('chai')
const expect = chai.expect
const products = require('../../lib/product')

describe('products', function() {
    it('looks up bread by name and gets product that costs £1.00', function() {
        const product = products.get('bread')
        expect(product.cost).to.equal(1.00)
    })

    it('looks up butter by name and gets product that costs £0.80', function() {
        const product = products.get('butter')
        expect(product.cost).to.equal(0.80)
    })

    it('looks up milk by name and gets product that costs £1.15', function() {
        const product = products.get('milk')
        expect(product.cost).to.equal(1.15)
    })

    it('looks up Milk with uppercase and gets milk product', function() {
        const product = products.get('Milk')
        expect(product.cost).to.equal(1.15)
    })
})
