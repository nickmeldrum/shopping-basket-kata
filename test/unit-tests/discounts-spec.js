'use strict'

const chai = require('chai')
const expect = chai.expect
const basketCreator = require('../../lib/basket')

describe('shopping basket', function() {
    context('discounts', function() {
        it('apply a simple discount of 50% off milk to a basket of 1 milk and totals = half the milk cost', function() {
            const basket = basketCreator()
            const discounts = [
                {
                    requirement: {
                        name: 'milk'
                    },
                    product: {
                        name: 'milk',
                        discount: 0.5
                    }
                }
            ]
            basket.add({name: 'milk', cost: 1})
            expect(basket.getTotal(discounts)).to.equal(0.5)
        })

        it('apply 2 discounts, 50% off milk and 50% off bread and total is half off', function() {
            const basket = basketCreator()
            const discounts = [
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
            ]
            basket.add({name: 'milk', cost: 1.6})
            basket.add({name: 'bread', cost: 1.2})
            expect(basket.getTotal(discounts)).to.equal(1.4)
        })

        it('require bread to be in basket to get 50% off all milk', function() {
            const basket = basketCreator()
            const discounts = [
                {
                    requirement: {
                        name: 'bread'
                    },
                    product: {
                        name: 'milk',
                        discount: 0.5
                    }
                }
            ]
            basket.add({name: 'milk', cost: 1.6})
            basket.add({name: 'bread', cost: 1.2})
            expect(basket.getTotal(discounts)).to.equal(2.0)
        })

        it('require bread to be in basket to get 50% off 1 milk', function() {
            const basket = basketCreator()
            const discounts = [
                {
                    requirement: {
                        name: 'bread'
                    },
                    product: {
                        name: 'milk',
                        discount: 0.5,
                        number: 1
                    }
                }
            ]
            basket.add({name: 'milk', cost: 1.6})
            basket.add({name: 'milk', cost: 1.6})
            basket.add({name: 'bread', cost: 1.2})
            expect(basket.getTotal(discounts)).to.equal(3.6)
        })

        it('require bread to be in basket to get 50% off 2 milks', function() {
            const basket = basketCreator()
            const discounts = [
                {
                    requirement: {
                        name: 'bread'
                    },
                    product: {
                        name: 'milk',
                        discount: 0.5,
                        number: 2
                    }
                }
            ]
            basket.add({name: 'milk', cost: 1})
            basket.add({name: 'milk', cost: 1})
            basket.add({name: 'milk', cost: 1})
            basket.add({name: 'bread', cost: 0.1})
            expect(basket.getTotal(discounts)).to.equal(2.1)
        })

        it('require bread to be in basket to get 50% off 2 milks when bread added first', function() {
            const basket = basketCreator()
            const discounts = [
                {
                    requirement: {
                        name: 'bread'
                    },
                    product: {
                        name: 'milk',
                        discount: 0.5,
                        number: 2
                    }
                }
            ]
            basket.add({name: 'bread', cost: 0.1})
            basket.add({name: 'milk', cost: 1})
            basket.add({name: 'milk', cost: 1})
            basket.add({name: 'milk', cost: 1})
            expect(basket.getTotal(discounts)).to.equal(2.1)
        })

        it('require 2 bread, but only 1 bread in basket discount not applied', function() {
            const basket = basketCreator()
            const discounts = [
                {
                    requirement: {
                        name: 'bread',
                        number: 2
                    },
                    product: {
                        name: 'milk',
                        discount: 0.5,
                        number: 1
                    }
                }
            ]
            basket.add({name: 'bread', cost: 0.1})
            basket.add({name: 'milk', cost: 1})
            expect(basket.getTotal(discounts)).to.equal(1.1)
        })

        it('require 2 bread, and 2 bread in basket discount is applied', function() {
            const basket = basketCreator()
            const discounts = [
                {
                    requirement: {
                        name: 'bread',
                        number: 2
                    },
                    product: {
                        name: 'milk',
                        discount: 0.5,
                        number: 1
                    }
                }
            ]
            basket.add({name: 'bread', cost: 0.1})
            basket.add({name: 'milk', cost: 1})
            basket.add({name: 'bread', cost: 0.1})
            expect(basket.getTotal(discounts)).to.equal(0.7)
        })
    })
})
