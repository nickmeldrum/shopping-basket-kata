'use strict'

module.exports = function lookup(name) {
    const products = new Map([
        ['bread', {name: 'Bread', cost: 1.00}],
        ['butter', {name: 'Butter', cost: 0.80}],
        ['milk', {name: 'Milk', cost: 1.15}]
    ])

    return products.get(name.toLowerCase())
}
