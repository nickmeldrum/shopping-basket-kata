'use strict'

const discount = require('./discount').discount
const number = require('./number')

module.exports = function(products, discounts) {
    const productsToTotal = discounts ? discount(products, discounts) : products
    const total = productsToTotal.reduce((prev, current) => prev + current.cost, 0)
    return number.round(total)
}
