'use strict'

const validator = require('./validate-product')
const discounter = require('./discounts')
const number = require('./numbers')

module.exports = function(discounts) {
    const products = []

    function getTotal() {
        let productsToTotal = products
        if (discounts)
            productsToTotal = discounter(products, discounts)
        const total = productsToTotal.reduce((prev, current) => prev + current.cost, 0)
        return number.round(total)
    }

    function add(product, quantity) {
        validator(product)
        if (!quantity) quantity = 1
        for(let i = 0; i < quantity; i++)
            products.push(Object.assign({}, product))
    }

    return { getTotal, add }
}
