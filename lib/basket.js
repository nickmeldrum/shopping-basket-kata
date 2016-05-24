'use strict'

const products = require('./product')
const total = require('./total')

module.exports = function() {
    const basket = []

    function add(product, quantity) {
        products.validate(product)
        if (!quantity) quantity = 1
        for(let i = 0; i < quantity; i++)
            basket.push(Object.assign({}, product))
    }

    return { getTotal: total.bind(null, basket), add }
}
