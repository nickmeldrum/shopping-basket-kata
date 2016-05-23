const basketCreator = require('../lib/basket')
const chai = require('chai')
const expect = chai.expect

describe('Feature: Calculate totals', function() {
    describe('Given the basket has 1 bread, 1 butter and 1 milk when I total the basket', function() {
        it('then the total should be £2.95', function() {
            const basket = basketCreator()
            basket.add({name: 'Bread', cost: 1.00})
            basket.add({name: 'Butter', cost: 0.80})
            basket.add({name: 'Milk', cost: 1.15})
            
            expect(basket.getTotal()).to.equal(2.95)
        })
    })
})
