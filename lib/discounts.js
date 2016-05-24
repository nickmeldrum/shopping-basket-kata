module.exports = function (products, discounts) {
    discounts.forEach(discount => {
        if (products.find(product => product.name === discount.requirement.name))
            products.forEach(product => {
                if (discount.product.name === product.name)
                    product.cost = product.cost * discount.product.discount
            })
    })
    return products

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
