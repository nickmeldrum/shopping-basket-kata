'use strict'

const number = require('./number')

exports.validate = function(product) {
    if (!product || !product.cost || !number.isNumeric(product.cost))
        throw new Error('please add a real product with a cost')

    if (!product.name || typeof product.name !== "string")
        throw new Error('please add an product with a name')
}

exports.products = function(name) {
    const products = new Map([
        ['bread', {name: 'Bread', cost: 1.00}],
        ['butter', {name: 'Butter', cost: 0.80}],
        ['milk', {name: 'Milk', cost: 1.15}]
    ])

    return Object.assign({}, products.get(name.toLowerCase()))
}
