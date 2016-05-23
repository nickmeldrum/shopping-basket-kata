module.exports = function (products, discount) {
    return products.map(product => {
        if (discount.name === product.name)
            return {
                name: product.name,
                cost: product.cost * discount.discount
            }
        return product
    })
}
