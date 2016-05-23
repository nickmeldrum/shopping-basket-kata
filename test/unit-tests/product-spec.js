const chai = require('chai')
const expect = chai.expect
const lookup = require('../../lib/product')

describe('products', function() {
    it('looks up bread by name and gets product that costs £1.00', function() {
        const product = lookup('bread')
        expect(product.cost).to.equal(1.00)
    })

    it('looks up butter by name and gets product that costs £0.80', function() {
        const product = lookup('butter')
        expect(product.cost).to.equal(0.80)
    })
})
