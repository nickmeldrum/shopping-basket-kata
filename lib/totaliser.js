'use strict'

const discounter = require('./discounts')
const number = require('./numbers')

module.exports = function(products, discounts) {
    let productsToTotal = products
    if (discounts)
        productsToTotal = discounter(products, discounts)
    const total = productsToTotal.reduce((prev, current) => prev + current.cost, 0)
    return number.round(total)
}
