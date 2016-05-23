const chai = require('chai')
const expect = chai.expect
const product = require('../lib/product')

describe('products', function() {
    it('looks up bread by name and gets product that costs £1.00', function() {
        const bread = product('bread')
        expect(bread.cost).to.equal(1.00)
    })
})
