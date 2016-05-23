const chai = require('chai')
const expect = chai.expect
const basketCreator = require('../../lib/basket')

describe('shopping basket', function() {
    context('discounts', function() {
        it('apply a simple discount of 50% off milk to a basket of 1 milk and totals = half the milk cost', function() {
            basket = basketCreator({name: 'milk', discount: 0.5})
            basket.add({name: 'milk', cost: 1})
            expect(basket.getTotal()).to.equal(0.5)
        })
    })
})
