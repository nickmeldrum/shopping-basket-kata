const validator = require('./validate-product')
const discounter = require('./discounts')

module.exports = function(discounts) {
    const products = []

    function getTotal() {
        let productsToTotal = products
        if (discounts)
            productsToTotal = discounter(products, discounts)
        return productsToTotal.reduce((prev, current) => prev + current.cost, 0)
    }

    function add(product, quantity) {
        validator(product)
        if (!quantity) quantity = 1
        for(let i = 0; i < quantity; i++)
            products.push(product)
    }

    return { getTotal, add }
}
