'use strict'

const validator = require('./validate-product')
const totaliser = require('./totaliser')

module.exports = function() {
    const products = []

    function add(product, quantity) {
        validator(product)
        if (!quantity) quantity = 1
        for(let i = 0; i < quantity; i++)
            products.push(Object.assign({}, product))
    }

    return { getTotal: totaliser.bind(null, products), add }
}
