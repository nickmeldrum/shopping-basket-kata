const validator = require('./validate-product')

module.exports = function() {
    const products = []

    function getTotal() {
        return products.reduce((prev, current) => prev + current.cost, 0)
    }

    function add(product, quantity) {
        validator(product)
        if (!quantity) quantity = 1
        for(var i = 0; i < quantity; i++)
            products.push(product)
    }


    return { getTotal, add }
}
