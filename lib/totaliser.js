'use strict'

const discounter = require('./discounts')
const number = require('./numbers')

module.exports = function(products, discounts) {
    const productsToTotal = discounts ? discounter(products, discounts) : products
    const total = productsToTotal.reduce((prev, current) => prev + current.cost, 0)
    return number.round(total)
}
