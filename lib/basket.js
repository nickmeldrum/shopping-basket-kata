const validator = require('./validate-product')

module.exports = function() {
    const products = []

    function getTotal() {
        return products.reduce((prev, current) => prev + current.cost, 0)
    }

    function add(product) {
        validator(product)
        products.push(product)
    }


    return { getTotal, add }
}
