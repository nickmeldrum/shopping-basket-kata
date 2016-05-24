'use strict'

const product = require('./product')
const total = require('./total')

module.exports = function() {
    const products = []

    function add(prod, quantity) {
        product.validate(prod)
        if (!quantity) quantity = 1
        for(let i = 0; i < quantity; i++)
            products.push(Object.assign({}, prod))
    }

    return { getTotal: total.bind(null, products), add }
}
