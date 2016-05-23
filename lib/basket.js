module.exports = function() {
    const products = []

    function getTotal() {
        return products.reduce((prev, current) => prev + current.cost, 0)
    }

    function add(product) {
        if (!product || !product.cost || !isNumeric(product.cost))
            throw new Error('please add a real product with a cost')

        if (!product.name || typeof product.name !== "string")
            throw new Error('please add an product with a name')

        products.push(product)
    }

    // from http://stackoverflow.com/questions/18082/validate-decimal-numbers-in-javascript-isnumeric
    function isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n)
    }

    return { getTotal, add }
}
