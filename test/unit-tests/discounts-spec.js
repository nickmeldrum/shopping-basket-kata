const chai = require('chai')
const expect = chai.expect
const basketCreator = require('../../lib/basket')

describe('shopping basket', function() {
    context('discounts', function() {
        it('apply a simple discount of 50% off milk to a basket of 1 milk and totals = half the milk cost', function() {
            basket = basketCreator([
                {
                    requirement: {
                        name: 'milk'
                    },
                    product: {
                        name: 'milk',
                        discount: 0.5
                    }
                }
            ])
            basket.add({name: 'milk', cost: 1})
            expect(basket.getTotal()).to.equal(0.5)
        })

        it('apply 2 discounts, 50% off milk and 50% off bread and total is half off', function() {
            basket = basketCreator([
                {
                    requirement: {
                        name: 'milk'
                    },
                    product: {
                        name: 'milk',
                        discount: 0.5
                    }
                },
                {
                    requirement: {
                        name: 'bread'
                    },
                    product: {
                        name: 'bread',
                        discount: 0.5
                    }
                }
            ])
            basket.add({name: 'milk', cost: 1.6})
            basket.add({name: 'bread', cost: 1.2})
            expect(basket.getTotal()).to.equal(1.4)
        })

        it('require bread to be in basket to get 50% off all milk', function() {
            basket = basketCreator([
                {
                    requirement: {
                        name: 'bread'
                    },
                    product: {
                        name: 'milk',
                        discount: 0.5
                    }
                }
            ])
            basket.add({name: 'milk', cost: 1.6})
            basket.add({name: 'bread', cost: 1.2})
            expect(basket.getTotal()).to.equal(2.0)
        })
    })
})
