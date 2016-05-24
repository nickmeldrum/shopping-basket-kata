module.exports = function (products, discounts) {
    return products.map(product => {
        const discountForProduct = discounts.find(discount => discount.name === product.name)
        if (discountForProduct)
            return {
                name: product.name,
                cost: product.cost * discountForProduct.discount
            }
        return product
    })
}
