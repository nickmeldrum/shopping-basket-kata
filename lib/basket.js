const validator = require('./validate-product')
const discounter = require('./discounts')

module.exports = function(discount) {
    const products = []

    function getTotal() {
        let productsToTotal = products
        if (discount)
            productsToTotal = discounter(products, discount)
        return productsToTotal.reduce((prev, current) => prev + current.cost, 0)
    }

    function add(product, quantity) {
        validator(product)
        if (!quantity) quantity = 1
        for(var i = 0; i < quantity; i++)
            products.push(product)
    }


    return { getTotal, add }
}
