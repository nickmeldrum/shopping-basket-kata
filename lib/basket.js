const numbers = require('./numbers')

module.exports = function() {
    const products = []

    function getTotal() {
        return products.reduce((prev, current) => prev + current.cost, 0)
    }

    function add(product) {
        if (!product || !product.cost || !numbers.isNumeric(product.cost))
            throw new Error('please add a real product with a cost')

        if (!product.name || typeof product.name !== "string")
            throw new Error('please add an product with a name')

        products.push(product)
    }


    return { getTotal, add }
}
