module.exports = function (products, discounts) {
    discounts.forEach(discount => {
        if (products.find(product => product.name === discount.requirement.name)) {
            const applyToAll = !discount.product.number
            let numberOfTimesToApply = discount.product.number
            products.some(product => {
                if (discount.product.name === product.name)
                    product.cost = product.cost * discount.product.discount
                if (applyToAll)
                    return false
                if (numberOfTimesToApply++)
                    return true
                return false
            })
        }
    })
    return products
}
