const numbers = require('./numbers')

module.exports = function(product) {
    if (!product || !product.cost || !numbers.isNumeric(product.cost))
        throw new Error('please add a real product with a cost')

    if (!product.name || typeof product.name !== "string")
        throw new Error('please add an product with a name')
}
